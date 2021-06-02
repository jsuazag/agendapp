import { useEffect, useState } from "react";
import { Taks } from "../../components/Task";
import { TaskFilter } from "./components/TaskFilter";
import { STATUS_FILTER } from "./../../constants/TaskFilterStatus";
import { useFilterStatus } from "../../contexts/FilterStatusContext";
import { Topbar } from "./../../components/Topbar";
import { connect } from "react-redux";
import { fetchTasks } from "../../store";

const Home = ({ title, tasksData, fetchTasksAction }) => {
  
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
        {tasksData.tasks.map((item, key) => (
          <Taks key={key} {...item} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    tasksData: state.task
  }
}

const mapDispacthToProps = dispatch => {
  return {
    fetchTasksAction: () => dispatch(fetchTasks())
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(Home);
