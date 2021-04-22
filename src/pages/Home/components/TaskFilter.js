import { TASK_STATUS } from "../../../constants/TaskStatus";
import { TaskFilterWrapper, FilterStatusTaskWrapper } from "./styles";

const FilterStatusTask = ({ statusName }) => (
  <FilterStatusTaskWrapper>{statusName}</FilterStatusTaskWrapper>
);

export const TaskFilter = () => (
  <TaskFilterWrapper>
    <FilterStatusTask statusName="All" />
    {
        TASK_STATUS.map((item, key) => (
            <FilterStatusTask key={key} statusName={item.name}  /> 
        ))
    }
  </TaskFilterWrapper>
);
