import {
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
} from "./taskTypes";
import axios from "axios";

export const fetchTasks = (status = 0) => {
  return (dispacth) => {
    dispacth(fetchTaskRequest());
    const url = "http://localhost:4000/tasks";
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOiI2MGIwMmQ1M2M5NjJkZTNiZTg5YTkyNDIiLCJyb2xlIjoxLCJpYXQiOjE2MjI2NzU4OTksImV4cCI6MTYyMjcxOTA5OX0.cVv7wK9yK2zkiCpWYs-CCDR1e28QBrpLTYcQSQ-VK-U";
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .get(url, { headers })
      .then((response) => {
        setTimeout(() => {
          dispacth(fetchTaskSuccess(response.data));
        }, 2000);
      })
      .catch((error) => {
        dispacth(fetchTaskFailure(error.response.statusText));
      });
  };
};

export const fetchTaskRequest = () => {
  return {
    type: FETCH_TASKS_REQUEST,
  };
};

export const fetchTaskSuccess = (tasks) => {
  return {
    type: FETCH_TASKS_SUCCESS,
    payload: tasks,
  };
};

export const fetchTaskFailure = (error) => {
  return {
    type: FETCH_TASKS_FAILURE,
    payload: error,
  };
};
