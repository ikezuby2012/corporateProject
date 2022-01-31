import axios from "axios";
import {
   LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_FAILURE, SIGNUP_SUCCESS, CLEAR
} from "./types";

import { SignUpUserApi, loginUserApi } from "../api";


export const signUp = (data) =>

   async (dispatch) => {
      const dataObj = JSON.stringify(data);
      // console.log("data coming from action " + dataObj);
      try {
         const res = await axios.post(SignUpUserApi, JSON.parse(dataObj));
         if (res.data.token) {
            localStorage.getItem("token", JSON.stringify(res.data.token));
            console.log(res.data.token);
         }
         console.log(res.data);
         dispatch({
            type: SIGNUP_SUCCESS,
            message: "success",
            payload: res.data
         });
         return Promise.resolve();
      } catch (err) {
         const { error } = err.response.data;
         let message;
         if (error.code === 11000) message = "email already exist!"
         dispatch({
            type: SIGNUP_FAILURE,
            message
         });
         return Promise.reject();
      }
   }

export const login = (data) =>
   async (dispatch) => {
      const dataObj = JSON.stringify(data);
      try {
         const res = await axios.post(loginUserApi, JSON.parse(dataObj));
         dispatch({
            type: LOGIN_SUCCESS,
            message: "Login successful!",
            payload: res.data
         });
         return Promise.resolve();
      } catch (err) {
         const { error } = err.response.data;
         // console.log(error);
         let message;
         if (error) {
            if (error.statusCode === 401) message = "incorrect email or password!";
         } else {
            message = "server not reachable!";
         }

         dispatch({
            type: LOGIN_FAILURE,
            message
         });
         return Promise.reject();
      }
   }

export const clear = () =>
   async (dispatch) => {
      dispatch({
         type: CLEAR
      })
   }