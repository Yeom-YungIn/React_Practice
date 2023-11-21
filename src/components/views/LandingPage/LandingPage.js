import React from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Auth from "../../../hoc/auth";

function LandingPage(props) {
    const navigate = useNavigate();
    // useEffect(() => {
    //     axios.get('/vin')
    //         .then(response => console.log(response.data));
    //
    // },[])

    const onClickHandler = async () => {
        const response = await axios.get('/api/user/logout')
        console.log(response)
        if (response && response.data.success) {
            navigate('/')
        }

    }
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh',
        }}>
            <form>
                <h2>시작 페이지</h2>
                <button onClick={onClickHandler}>로그아웃</button>
            </form>

        </div>
    );
}

export default Auth(LandingPage,null, false);