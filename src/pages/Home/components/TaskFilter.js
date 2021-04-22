import { TaskFilterWrapper, FilterStatusTaskWrapper } from "./styles";

const FilterStatusTask = ({statusName}) => (
    <FilterStatusTaskWrapper>
        {statusName}
    </FilterStatusTaskWrapper>
)

export const TaskFilter = () => (
    <TaskFilterWrapper>
        <FilterStatusTask statusName="All" />
    </TaskFilterWrapper>
)
