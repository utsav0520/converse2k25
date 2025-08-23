import * as api from "../api/index.js";
import { AUTH } from "../constants/actionTypes.js";


export const fetchUser = () => async (dispatch) => {
  try {
    const token = JSON.parse(localStorage.getItem("profile"));
    if(token) {
      const { data } = await api.getProfile(); 
      dispatch({ type: AUTH, data});
    }
  } catch (error) {
    console.error("Fetch user failed", error);
  }
};

export const googleSignIn = (userData) => async (dispatch) => {
  try {
    const { data } = await api.signIn(userData);
    dispatch({ type: AUTH, data });
    return { success: true };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Somethings Wroong | Please try again!",
    };
  }
};

export const updateProfile = (userData) => async (dispatch) => {
  try {
    const { data } = await api.updateProfile(userData);
    dispatch({ type: AUTH, data });
    return { success: true };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Username or password is incorrect! Please try again!",
    };
  }
};

