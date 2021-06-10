import { requestHttp, HTTP_VERBS } from '../../utils/HttpRequest';
import { USERS } from '../../constants/HttpEndpoints';
import {
  FETCH_LOGIN_FAILURE,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  AUTOLOGIN_FAILURE,
  AUTOLOGIN_SUCCESS
} from "./userTypes";
import { getToken, setToken } from '../../utils/LocalStorageToken';

export const fetchLogin = (credentials = {}) => {
  return (dispacth) => {
    dispacth(fetchLoginRequest());
    const callHttp = async (credentials) => {
      try {
        const response = await requestHttp({
          method: HTTP_VERBS.POST,
          endpoint: USERS.login,
          data: credentials
        });
        setToken(response.data.token);
        dispacth(fetchLoginSuccess());
      } catch (error) {
        const messageError = error.response.statusText || 'error';
        dispacth(fetchLoginFailure(messageError));
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

export const autologinFailure = () => {
  return {
    type: AUTOLOGIN_FAILURE
  }
}

export const autologinSuccess = () => {
  return {
    type: AUTOLOGIN_SUCCESS
  }
}

export const autologin = () => {
  return (dispacth) => {
    const callHttp = async () => {
      try {
        const token = getToken();
        await requestHttp({
          method: HTTP_VERBS.POST,
          endpoint: USERS.check,
          token
        });
        dispacth(autologinSuccess());
      } catch (error) {
        dispacth(autologinFailure());
      }
    };
    callHttp();
  }
}
