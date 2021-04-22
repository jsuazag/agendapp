import {
  Responsable,
  TaskStatus,
  TasksDetail,
  TaskWrapper,
  TimeLeft,
  TaskTitle,
} from "./styles";
import { FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getStatusById } from "../../constants/TaskStatus";

export const Taks = ({ name, responsable, timeLeft, status }) => {

  const renderStatus = (statusId) => {
    const status = getStatusById(statusId);
    return (
      <TaskStatus color={status.color}>{status.name}</TaskStatus>
    )
  }

  return (
    <Link to={"/detail"}>
      <TaskWrapper>
        <TaskTitle>{name}</TaskTitle>
        <TasksDetail>
          <Responsable>{responsable}</Responsable>
          <TimeLeft>
            <FaRegClock />
            <p>{timeLeft} days left</p>
          </TimeLeft>
          { renderStatus(status) }
        </TasksDetail>
      </TaskWrapper>
    </Link>
  );
};
