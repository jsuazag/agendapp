import {
  FETCH_LOGIN_FAILURE,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_REQUEST,
  AUTOLOGIN_FAILURE,
  AUTOLOGIN_SUCCESS
} from "./userTypes";

const initialState = {
  loading: false,
  isAuth: false,
  error: "",
  splash: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LOGIN_SUCCESS:
      return {
        loading: false,
        error: "",
        isAuth: true,
      };
    case FETCH_LOGIN_FAILURE:
      return {
        loading: false,
        error: action.payload,
        isAuth: false,
      };
    case AUTOLOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        splash: false,
      }
    case AUTOLOGIN_FAILURE: 
      return {
        ...state,
        isAuth: false,
        splash: false,
      }
    default:
      return state;
  }
};

export default reducer;
