import React from "react";
import styled from "styled-components";

const SplashWrapper = styled.div`
  background-color: #0f66ff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Splash = () => (
  <React.Fragment>
    <SplashWrapper>
      <img alt="logo agendapp" src="./assets/logo.png" />
    </SplashWrapper>
  </React.Fragment>
);
