import { NavigationApp } from "./pages/NavigationApp";
import React from "react";
import {GlobalStyle} from "./globalStyles";

export const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <NavigationApp />
  </React.Fragment>
)
