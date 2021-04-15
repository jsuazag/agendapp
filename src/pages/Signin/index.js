import React from "react";
import { Input } from "../../components/Input";
import { PageWrapper } from "../../globalStyles";

export const Signin = () => (
  <PageWrapper>
    <img src="./assets/logo-color.png" alt="logo" />
    <Input 
        type="email" 
        placeholder="Enter your email" 
        label="Email address" />
    <Input 
        type="password" 
        placeholder="Enter your password" 
        label="Password" />
  </PageWrapper>
);
