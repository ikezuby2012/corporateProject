import {
    LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_FAILURE, SIGNUP_SUCCESS, CLEAR
} from "../actions/types";

const initialState = {
    loggedIn: false,
    user: {},
    message: ""
}

const authReducer = (state = initialState, action) => {
    console.log("its working");
    switch (action.type) {
        case SIGNUP_SUCCESS:
            // console.log("data coming from reducer" + JSON.stringify(action.payload));
            // localStorage.setItem("token", JSON.stringify(action.payload.token));
            // let token = JSON.parse(localStorage.getItem("token"));
            // console.log(token);
            return {
                ...state,
                loggedIn: true,
                user: action.payload.user,
                message: action.message
            }
        case SIGNUP_FAILURE:
            console.log("message is " + JSON.stringify(action.message));
            return {
                ...state,
                loggedIn: false,
                user: {},
                message: action.message
            }
        case LOGIN_SUCCESS:
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            // let token2 = JSON.parse(localStorage.getItem("token"));
            return {
                ...state,
                loggedIn: true,
                user: action.payload.user,
                message: action.message
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggedIn: false,
                user: null,
                message: action.message
            }
        case CLEAR:
            return {}
        default:
            return state;
    }
}

export default authReducer;