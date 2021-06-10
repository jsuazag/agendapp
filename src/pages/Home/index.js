import { useEffect } from "react";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (currentTaskFilter === STATUS_FILTER.ALL) {
      fetchTasksAction();
    } else {
      fetchTasksAction({ status: currentTaskFilter });
    }
  }, [currentTaskFilter]);

  return (
    <>
      <Topbar title={title} />
      <TaskFilter />
      {
        tasksData.loading && <p>Loading...</p>
      }
      {
        tasksData.error && <p>{ tasksData.error }</p>
      }
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
    fetchTasksAction: (filter) => dispatch(fetchTasks(filter))
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(Home);
