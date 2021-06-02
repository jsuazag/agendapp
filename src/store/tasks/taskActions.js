import {
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
} from "./taskTypes";

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
  // TODO: llamar el api para obtener las tareas
  // Axios
  return (dispacth) => {
      dispacth(fetchTaskRequest());
      dispacth(fetchTaskSuccess(TASK_LIST));
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
