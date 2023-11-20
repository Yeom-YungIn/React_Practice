import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {loginUser} from "../../../_actions/user_action";
import {useNavigate} from "react-router-dom";

function LoginPage(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userName, setUseName] = useState("");
    const [Password, setPassword] = useState("");

    const onUserNameHandler = (event) => {
        setUseName(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            userName: userName,
            password: Password,
        }

        dispatch(loginUser(body))
            .then(response => {
                console.log(response)
                if (response.payLoad.result === "Login Success") {
                    navigate('/');
                } else {
                    alert("Error")
                }
            });
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh',
        }}>

            <form
                style={ {display: 'flex', flexDirection: 'column',}}
                onSubmit={onSubmitHandler}
            >
                <label>UserName</label>
                <input type="text" value={userName} onChange={onUserNameHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <br/>
                <button type= "submit">
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginPage;