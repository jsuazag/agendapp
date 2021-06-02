import {
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
} from "./taskTypes";
import axios from 'axios';
import reducer from "./taskReducer";

const TASK_LIST = [
  {
    id: 1,
    name: "Web design",
    responsable: "Luis",
    timeLeft: 2,
    status: 1,
  },
  {
    id: 2,
    name: "Hacer revisión",
    responsable: "Maria",
    timeLeft: 4,
    status: 1,
  },
  {
    id: 3,
    name: "Hacer estilos",
    responsable: "Martin",
    timeLeft: 6,
    status: 3,
  },
  {
    id: 4,
    name: "Conectar con api",
    responsable: "Luisa",
    timeLeft: 12,
    status: 2,
  },
  {
    id: 5,
    name: "Conectar servicio web",
    responsable: "Jose",
    timeLeft: 4,
    status: 4,
  },
  {
    id: 6,
    name: "Web design",
    responsable: "Luis",
    timeLeft: 2,
    status: 1,
  },
  {
    id: 7,
    name: "Hacer revisión",
    responsable: "Maria",
    timeLeft: 4,
    status: 1,
  },
  {
    id: 8,
    name: "Hacer estilos",
    responsable: "Martin",
    timeLeft: 6,
    status: 3,
  },
  {
    id: 9,
    name: "Conectar con api",
    responsable: "Luisa",
    timeLeft: 12,
    status: 2,
  },
  {
    id: 10,
    name: "Conectar servicio web",
    responsable: "Jose",
    timeLeft: 4,
    status: 4,
  },
];

export const fetchTasks = (status = 0) => {
  return (dispacth) => {
      dispacth(fetchTaskRequest());
      //dispacth(fetchTaskSuccess(TASK_LIST));
      const url = 'http://localhost:4000/tasks';
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOiI2MGIwMmQ1M2M5NjJkZTNiZTg5YTkyNDIiLCJyb2xlIjoxLCJpYXQiOjE2MjI1OTg2NzksImV4cCI6MTYyMjY0MTg3OX0.3RY51omwOxGkhKAKWZ1X7kqF0TPB6hmUKYGoFy_y_BI";
      const headers = {
        'Authorization': `Bearer ${token}`
      }
      axios.get(url, { headers } )
      .then(response => {
        console.log('response', response);
      })
      .catch(error => {
        console.log('error', error);
      });
  }
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
