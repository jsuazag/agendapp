import { useEffect, useState } from "react";
import { Taks } from "../../components/Task";
import { TASK_STATUS } from "../../constants/TaskStatus";
import { TaskFilter } from "./components/TaskFilter";

const TASK_LIST = [
  {
    name: "Web design",
    responsable: "Luis",
    timeLeft: 2,
    status: 1,
  },
  {
    name: "Hacer revisión",
    responsable: "Maria",
    timeLeft: 4,
    status: 1,
  },
  {
    name: "Hacer estilos",
    responsable: "Martin",
    timeLeft: 6,
    status: 3,
  },
  {
    name: "Conectar con api",
    responsable: "Luisa",
    timeLeft: 12,
    status: 2,
  },
  {
    name: "Conectar servicio web",
    responsable: "Jose",
    timeLeft: 4,
    status: 4,
  },
  {
    name: "Web design",
    responsable: "Luis",
    timeLeft: 2,
    status: 1,
  },
  {
    name: "Hacer revisión",
    responsable: "Maria",
    timeLeft: 4,
    status: 1,
  },
  {
    name: "Hacer estilos",
    responsable: "Martin",
    timeLeft: 6,
    status: 3,
  },
  {
    name: "Conectar con api",
    responsable: "Luisa",
    timeLeft: 12,
    status: 2,
  },
  {
    name: "Conectar servicio web",
    responsable: "Jose",
    timeLeft: 4,
    status: 4,
  },
];

const STATUS_FILTER = {
  ALL: 0,
  NEW: 1,
  IN_PROGRESS: 2,
  DUE_DATE: 3,
  CLOSED: 4
}

export const Home = () => {

  const [statusFilter, setStatusFilter] = useState(STATUS_FILTER.ALL);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    if (statusFilter === STATUS_FILTER.ALL) {
      setTaskList(TASK_LIST);
    } else {
      const taskFiltered = TASK_LIST.filter(el => el.status === statusFilter);
      setTaskList(taskFiltered);
    }
  }, [statusFilter]);

  const filterHandler = (statusFilterChoose) => {
    setStatusFilter(statusFilterChoose);
  }

  return (
    <>
      <h3>Home</h3>
      <TaskFilter statusId={statusFilter} onPress={ filterHandler } />
      <div>
        {taskList.map((item, key) => (
          <Taks key={key} {...item} />
        ))}
      </div>
    </>
  );
};
