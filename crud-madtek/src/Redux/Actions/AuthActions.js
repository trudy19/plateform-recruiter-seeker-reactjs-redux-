


import { USER_LOGOUT, USER_SIGNIN_FAIL,USER_REGISTER_SUCCESS,USER_SIGNIN_SUCCESS,USER_SIGNIN_REQUEST, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL } from "../types";

import Axios from "axios";


export const signin = (email, password) => async (dispatch) => {


    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
    try {
      const { data } = await Axios.post("http://localhost:8080/auth/signin", { email, password });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });

     localStorage.setItem("userInfo",JSON.stringify(data));
     console.log(JSON.parse(localStorage.getItem('userInfo')))

    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
    }
    
  }

  export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
  //localStorage.removeItem('JobList');

  //  localStorage.removeItem('persist:root')


    dispatch({ type: USER_LOGOUT })
  }


