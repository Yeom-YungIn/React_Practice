import React, {useEffect} from "react";
import {useDispatch} from 'react-redux';
import {Axios} from "axios";
import {auth} from "../_actions/user_action";

const dispatch = useDispatch();
export default function (SpecificComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {
        useEffect(() => {

            dispatch(auth())
                .then(response => {
                    console.log(response)
                })

        });
    }
};