import { NavigationApp } from "./pages/NavigationApp";
import React from "react";
import { GlobalStyle } from "./globalStyles";
import { FilterStatusProvider } from "./contexts/FilterStatusContext";

export const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <FilterStatusProvider>
      <NavigationApp />
    </FilterStatusProvider>
  </React.Fragment>
);
