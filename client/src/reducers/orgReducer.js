import {
    CREATE_ORG_SUCCESS, CREATE_ORG_FAILURE, CHECK_ADMIN_SUCCESS, CHECK_ADMIN_FAILURE
} from "../actions/types";

const initialState = {
    data: {},
    message: ""
}

const orgReducer = (state = initialState, action) => {
    console.log("its working");
    switch (action.type) {
        case CREATE_ORG_SUCCESS:
            return {
                data: action.payload
            }

        case CREATE_ORG_FAILURE:
            return {
                ...state,
                data: {},
                message: action.message
            }
        case CHECK_ADMIN_SUCCESS:
            return {
                data: action.payload,
                message: action.message
            }
        case CHECK_ADMIN_FAILURE:
            return {
                data: {},
                message: action.message
            }
        default:
            return state;
    }
}

export default orgReducer;