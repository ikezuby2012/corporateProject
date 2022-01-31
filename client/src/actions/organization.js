import axios from "axios";
import {
    CREATE_ORG_SUCCESS, CREATE_ORG_FAILURE, CHECK_ADMIN_SUCCESS, CHECK_ADMIN_FAILURE,
    UPDATE_ORG_SETTING_SUCCESS, UPDATE_ORG_SETTING_FAILURE
} from "./types";

import { createOrg, checkAdminOrg, updateOrg } from "../api";

let token = JSON.parse(localStorage.getItem("token"));

export const createOrganization = (data) =>
    async (dispatch) => {
        const dataObj = JSON.stringify(data);
        console.log(token);
        try {
            const res = await axios.post(createOrg, JSON.parse(dataObj), {
                headers: {
                    "Authorization": `bearer ${token}`
                }
            });

            dispatch({
                type: CREATE_ORG_SUCCESS,
                message: "success",
                payload: res.data
            });
            return Promise.resolve();
        } catch (err) {
            const { error } = err.response.data;
            dispatch({
                type: CREATE_ORG_FAILURE,
                message: error
            });
            return Promise.reject();
        }
    }

//check if admin have an existing organization
export const checkAdminOrganization = (id) =>
    async (dispatch) => {
        console.log(token);
        try {
            const res = await axios.get(`${checkAdminOrg}/${id}`,
                {
                    headers: {
                        "Authorization": `bearer ${token}`
                    }
                }
            );

            dispatch({
                type: CHECK_ADMIN_SUCCESS,
                message: "success",
                payload: res.data.data
            });
            return Promise.resolve();
        } catch (err) {
            const { error } = err.response.data;
            dispatch({
                type: CHECK_ADMIN_FAILURE,
                message: error
            });
            return Promise.reject();
        }
    }

export const updateOrganization = (data, id) => 
    async (dispatch) => {
        try {
            const dataObj = JSON.stringify(data);
            const res = await axios.patch(`${updateOrg}/${id}`,  JSON.parse(dataObj), {
                headers: {
                    "Authorization": `bearer ${token}`
                }
            });

            dispatch({
                type: UPDATE_ORG_SETTING_SUCCESS,
                message: "success",
                payload: res.data.data
            });
            return Promise.resolve();
        } catch (err) {
            const { error } = err.response.data;
            dispatch({
                type: UPDATE_ORG_SETTING_FAILURE,
                message: error
            });
            return Promise.reject();
        }
    }
