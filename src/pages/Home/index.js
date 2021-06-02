import { useEffect, useState } from "react";
import { Taks } from "../../components/Task";
import { TaskFilter } from "./components/TaskFilter";
import { STATUS_FILTER } from "./../../constants/TaskFilterStatus";
import { useFilterStatus } from "../../contexts/FilterStatusContext";
import { Topbar } from "./../../components/Topbar";
import { connect } from "react-redux";
import { fetchTasks } from "../../store";

const TASK_LIST = [];

const Home = ({ title, tasksData, fetchTasksAction }) => {
  const [taskList, setTaskList] = useState([]);
  const { currentTaskFilter } = useFilterStatus();

  useEffect(() => {
    console.log('task state from store', tasksData);
  }, [tasksData]);

  useEffect(() => {
    fetchTasksAction();
  }, []);

  /*useEffect(() => {
    if (currentTaskFilter === STATUS_FILTER.ALL) {
      setTaskList(TASK_LIST);
    } else {
      const taskFiltered = TASK_LIST.filter(
        (el) => el.status === currentTaskFilter
      );
      setTaskList(taskFiltered);
    }
  }, [currentTaskFilter]);*/

  return (
    <>
      <Topbar title={title} />
      <TaskFilter />
      <div>
        {taskList.map((item, key) => (
          <Taks key={key} {...item} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    tasksData: state
  }
}

const mapDispacthToProps = dispatch => {
  return {
    fetchTasksAction: () => dispatch(fetchTasks())
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(Home);
