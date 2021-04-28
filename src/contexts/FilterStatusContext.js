import { createContext, useContext, useState } from "react";
import { STATUS_FILTER } from "../constants/TaskFilterStatus";

const initialState = STATUS_FILTER.ALL;

const FilterStatusContext = createContext(initialState);

export const FilterStatusProvider = ({ children }) => {

  const [currentTaskFilter, setCurrentTaskFilter] = useState(initialState);

  return (
    <FilterStatusContext.Provider value={{ currentTaskFilter, setCurrentTaskFilter }}>
      {children}
    </FilterStatusContext.Provider>
  );
};

export const useFilterStatus = () => useContext(FilterStatusContext);
