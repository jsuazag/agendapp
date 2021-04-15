import React from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PageWrapper } from "../../globalStyles";
import { LogoWrapper } from "./styles";

export const Signin = () => (
  <PageWrapper>
    <LogoWrapper>
      <img src="./assets/logo-color.png" alt="logo" />
    </LogoWrapper>
    <Input 
        type="email" 
        placeholder="Enter your email" 
        label="Email address" />
    <Input 
        type="password" 
        placeholder="Enter your password" 
        label="Password" />
    <Button text="Sign in" />
  </PageWrapper>
);
