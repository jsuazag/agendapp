import React from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { LinkTo } from "../../components/LinkTo";
import { PageWrapper } from "../../globalStyles";
import { LogoWrapper, TopLink } from "./styles";

export const Signin = () => (
  <PageWrapper>
    <TopLink>
      <LinkTo text="Sign up" url="/signup" />
    </TopLink>
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
