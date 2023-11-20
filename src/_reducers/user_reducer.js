import {LOGIN_USER, REGISTER_USER} from "../_actions/types";


export const UserState = {
    userName: 'test',
    password: 'test',
}
export default function (state = UserState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {state: state, result: action.payLoad}

        case REGISTER_USER:
            return {state: state, result: action.payLoad}

        default:
            return state;
    }
};