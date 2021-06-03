import axios from "axios";

export const HTTP_VERBS = {
  POST: "post",
  GET: "get",
  DELETE: "delete",
  PUT: "put",
};

const headersConfig = (token) => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  };
};

export const requestHttp = async ({
  method = HTTP_VERBS.POST,
  endpoint,
  data = {}, // body
  params = {},
  token = "",
}) => {
  try {
    const url = process.env.REACT_APP_BASE_URL + endpoint;
    const options = {
      method,
      url,
      data,
      params,
      headers: headersConfig(token),
    };
    return await axios(options);
  } catch (error) {
      throw error;
  }
};
