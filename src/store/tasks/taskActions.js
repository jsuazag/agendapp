import {
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
} from "./taskTypes";
import { HTTP_VERBS, requestHttp } from '../../utils/HttpRequest';
import { TOKEN } from "../../constants/Auth";

export const fetchTasks = (filter = {}) => {
  return (dispacth) => {
    dispacth(fetchTaskRequest());    
    const callHttp = async (filter) => {
      try {
        const token = localStorage.getItem(TOKEN);
        const response = await requestHttp(
            { 
              method: HTTP_VERBS.GET,
              token,
              endpoint: 'tasks',
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
