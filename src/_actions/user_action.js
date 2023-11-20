import axios, {Axios} from "axios";
import {LOGIN_USER, REGISTER_USER} from "./types";

export async function loginUser(dataToSubmit) {

    let request = {
        type: LOGIN_USER,
        payLoad: null,
    };

    try {
        const response = await axios.post('/auth/signin', dataToSubmit)
        request.payLoad = response.data;
    } catch (error){
        if (error.response && error.response.status === 401) {
            request.payLoad = {result: "Unauthorized: Authentication failed"}
        }
    }

    return request
}

export async function registerUser(dataToSubmit) {
    let request = {
        type: REGISTER_USER,
        payLoad: null,
    }

    try {
        const response = await axios.post('/auth/signup', dataToSubmit);
        request.payLoad = response.data;
    } catch (e) {
        if (e.response && e.response.status === 401) {
            request.payLoad = {result: "Unauthorized: Authentication failed"}
        }
    }

    return request;
}