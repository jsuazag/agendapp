import React, { Fragment } from "react";
import { useHistory, useParams } from "react-router";
import { Topbar } from "../../components/Topbar";
import { getStatusById } from "../../constants/TaskStatus";
import { TaskDescription, TaskFooter, TaskDueDate, TaskResponsable, TaskStatusLabel, TaskTitle } from "./styles";

const TaskDetail = ({title}) => {
  const history = useHistory();
  const { id } = useParams();

  const renderStatus = (id) => {
    const status = getStatusById(id);
    return <TaskStatusLabel color={status.color}>{status.name}</TaskStatusLabel>
  }

  const goBackApp = () => {
    history.goBack();
  }

  return (
    <Fragment>
      <Topbar isBackVisible={true} onPress={goBackApp} title={title} />
      { renderStatus(2) }
      <TaskTitle>Titulo</TaskTitle>
      <TaskDescription>lorem.....</TaskDescription>
      <TaskFooter>
        <TaskDueDate>3 days left</TaskDueDate>
        <TaskResponsable>Juanito</TaskResponsable>
      </TaskFooter>
    </Fragment>
  );
};

export default TaskDetail;
