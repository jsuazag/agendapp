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

export const Taks = ({ name, responsable, timeLeft, status }) => {
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
          <TaskStatus>{status}</TaskStatus>
        </TasksDetail>
      </TaskWrapper>
    </Link>
  );
};
