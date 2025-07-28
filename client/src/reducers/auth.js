import {
  AUTH,
  EMAILS,
  LOGOUT,
  UPDATE_PROFILE,
} from "../constants/actionTypes.js";

const authReducer = (
  state = { authData: { user: null, token: null }, emails: null },
  action
) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify(action.data.token));
      return {
        ...state,
        authData: {
          user: action.data.user,
          token: action.data.token,
        },
      };

    case UPDATE_PROFILE:
      return {
        ...state,
        authData: {
          ...state.authData,
          user: action.payload,
          token: action.data.token,
        },
      };

    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: { user: null, token: null } };

    case EMAILS:
      return {
        ...state,
        emails: action.data.unregisteredEmails,
      };

    default:
      return state;
  }
};

export default authReducer;
