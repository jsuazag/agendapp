import React, { Fragment } from "react";
import { useParams } from "react-router";
import { getStatusById } from "../../constants/TaskStatus";
import { TaskDescription, TaskFooter, TaskDueDate, TaskResponsable, TaskStatusLabel, TaskTitle } from "./styles";

export const TaskDetail = () => {
  const { id } = useParams();

  const renderStatus = (id) => {
    const status = getStatusById(id);
    return <TaskStatusLabel color={status.color}>{status.name}</TaskStatusLabel>
  }

  return (
    <Fragment>
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
