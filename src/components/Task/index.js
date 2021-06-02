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
import { timeLeftFromNow } from "../../utils/DateFormats";

export const Taks = ({ title, responsible, due_date, status, _id}) => {

  const renderStatus = (statusId) => {
    const status = getStatusById(statusId);
    return (
      <TaskStatus color={status.color}>{status.name}</TaskStatus>
    )
  }

  return (
    <Link to={`/detail/${_id}`}>
      <TaskWrapper>
        <TaskTitle>{title}</TaskTitle>
        <TasksDetail>
          <Responsable>{responsible?.name}</Responsable>
          <TimeLeft>
            <FaRegClock />
            <p>
              {
                timeLeftFromNow(due_date)
              } 
            </p>
          </TimeLeft>
          { renderStatus(status) }
        </TasksDetail>
      </TaskWrapper>
    </Link>
  );
};
