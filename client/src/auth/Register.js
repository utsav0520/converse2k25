import * as api from "../api/index.js";
import { AUTH, EMAILS } from "../constants/actionTypes.js";

export const RegisterInSingle =
  ({ event }) =>
  async (dispatch) => {
    try {
      const { data } = await api.RegisterInSingle({ event });
      dispatch({ type: AUTH, data });
      return { success: true };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Register in Event Failed !!",
      };
    }
  };

export const RegisterInTeam =
  ({ event, email }) =>
  async (dispatch) => {
    try {
      const { data } = await api.RegisterInTeam({ event, email });
      dispatch({ type: AUTH, data });
      return { success: true };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Register in Event Failed !!",
      };
    }
  };

  export const fetchEmails =
  ({ event }) =>
  async (dispatch) => {
    try {
      const { data } = await api.fetchEmails(event);
      dispatch({ type: EMAILS, data });
      return { success: true, data };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Waitting",
      };
    }
  };
