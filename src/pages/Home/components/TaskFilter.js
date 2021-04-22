import { TASK_STATUS } from "../../../constants/TaskStatus";
import { TaskFilterWrapper, FilterStatusTaskWrapper } from "./styles";

const FilterStatusTask = ({ statusName, statusId, active, onPress }) => (
  <FilterStatusTaskWrapper onClick={() => onPress(statusId)} active={active} >{statusName}</FilterStatusTaskWrapper>
);

export const TaskFilter = ({ statusId, onPress }) => (
  <TaskFilterWrapper>
    {
        TASK_STATUS.map((item, key) => (
            <FilterStatusTask onPress={onPress} statusId={item.id} active={item.id === statusId} key={key} statusName={item.name}  /> 
        ))
    }
  </TaskFilterWrapper>
);
