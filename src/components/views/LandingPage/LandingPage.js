import React, {useEffect} from 'react';
import axios from "axios";

function LandingPage(props) {
    useEffect(() => {
        axios.get('/vin')
            .then(response => console.log(response.data));

    },[])
    return (
        <div>
            LandinPage
        </div>
    );
}

export default LandingPage;