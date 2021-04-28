import { TASK_STATUS } from "../../../constants/TaskStatus";
import { useFilterStatus } from "../../../contexts/FilterStatusContext";
import { TaskFilterWrapper, FilterStatusTaskWrapper } from "./styles";

const FilterStatusTask = ({ statusName, statusId, active, onPress }) => (
  <FilterStatusTaskWrapper onClick={() => onPress(statusId)} active={active}>
    {statusName}
  </FilterStatusTaskWrapper>
);

export const TaskFilter = () => {
  const { currentTaskFilter, setCurrentTaskFilter } = useFilterStatus();

  const handlerChangeFilterStatus = (newStatusId) => {
    setCurrentTaskFilter(newStatusId);
  }
  
  return (
    <TaskFilterWrapper>
      {TASK_STATUS.map((item, key) => (
        <FilterStatusTask
          onPress={ handlerChangeFilterStatus }
          statusId={item.id}
          active={item.id === currentTaskFilter}
          key={key}
          statusName={item.name}
        />
      ))}
    </TaskFilterWrapper>
  )
};
