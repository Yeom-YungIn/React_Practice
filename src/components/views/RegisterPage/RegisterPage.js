import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {loginUser, registerUser} from "../../../_actions/user_action";

function RegisterPage(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userName, setUseName] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const onUserNameHandler = (event) => {
        setUseName(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (Password !== ConfirmPassword) {
            return alert("비밀번호와 비밀번호 확인이 동일하지 않습니다.")
        }

        let body = {
            userName: userName,
            password: Password,
        };

        dispatch(registerUser(body))
            .then(response => {
                console.log(response)
                if (response.payLoad.id) {
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
                <label>이름</label>
                <input type="text" value={userName} onChange={onUserNameHandler} />
                <label>비밀번호</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <label>비밀번호 확인</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
                <br/>
                <button type= "submit">
                    회원 가입
                </button>
            </form>
        </div>
    );
}

export default RegisterPage;