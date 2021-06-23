import {
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
} from "./taskTypes";
import { HTTP_VERBS, requestHttp } from '../../utils/HttpRequest';
import { TASKS } from "../../constants/HttpEndpoints";
import { getToken } from "../../utils/LocalStorageToken";
import { redirect } from '../index';

// esto no debería estar acá... pero es para emular el comportamiento...
export const fetchCreateTask = (taskData) => {
  return (dispacth) => {
    try {
      // vamos al servidor... 
      // si todo salio bien...
      //dispacth(fetchCreateTaskSuccess(data));
      dispacth(redirect('/'));
    } catch (error) {
      //dispacth(fetchCreateTaskFailure());
    }
  }
}

// fin...

export const fetchTasks = (filter = {}) => {
  return (dispacth) => {
    dispacth(fetchTaskRequest());    
    const callHttp = async (filter) => {
      try {
        const token = getToken();
        const response = await requestHttp(
            { 
              method: HTTP_VERBS.GET,
              token,
              endpoint: TASKS.getTasks,
              params: filter
            }
        );
        dispacth(fetchTaskSuccess(response.data));
      } catch (error) {
        dispacth(fetchTaskFailure(error.response.statusText));
      }
    };
    callHttp(filter);
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
