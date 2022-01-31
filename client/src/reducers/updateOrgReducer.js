import {
    UPDATE_ORG_SETTING_SUCCESS, UPDATE_ORG_SETTING_FAILURE
} from "../actions/types";

const initialState = {
    data: {},
    message: ""
}

const updateOrgReducer = (state = initialState, action) => {
    console.log("its working");
    switch (action.type) {
        case UPDATE_ORG_SETTING_SUCCESS:
            return {
                ...state,
                data: action.payload,
                message: action.message
            }
        case UPDATE_ORG_SETTING_FAILURE:
            return {
                ...state,
                data: {},
                message: action.message
            }
        default:
            return state;
    }
}

export default updateOrgReducer;