import { requestHttp, HTTP_VERBS } from '../../utils/HttpRequest';
import { TOKEN } from '../../constants/Auth';
import {
  FETCH_LOGIN_FAILURE,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
} from "./userTypes";

export const fetchLogin = (credentials = {}) => {
  return (dispacth) => {
    dispacth(fetchLoginRequest());
    const callHttp = async (credentials) => {
      try {
        const response = await requestHttp({
          method: HTTP_VERBS.POST,
          endpoint: "auth/signin",
          data: credentials
        });
        localStorage.setItem(TOKEN, response.data.token)
        dispacth(fetchLoginSuccess());
      } catch (error) {
        dispacth(fetchLoginFailure(error.response.statusText));
      }
    };
    callHttp(credentials);
  };
};

export const fetchLoginRequest = () => {
  return {
    type: FETCH_LOGIN_REQUEST,
  };
};

export const fetchLoginSuccess = () => {
  return {
    type: FETCH_LOGIN_SUCCESS
  };
};

export const fetchLoginFailure = (error) => {
  return {
    type: FETCH_LOGIN_FAILURE,
    payload: error,
  };
};
