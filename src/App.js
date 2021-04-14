import { NavigationApp } from "./pages/NavigationApp";
import {createGlobalStyle} from "styled-components";
import React from "react";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

export const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <NavigationApp />
  </React.Fragment>
)