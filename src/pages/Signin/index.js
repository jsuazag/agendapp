import React from "react";
import { Input } from "../../components/Input";

export const Signin = () => (
  <React.Fragment>
    <img src="./assets/logo.png" alt="logo" />
    <Input 
        type="email" 
        placeholder="Enter your email" 
        label="Email address" />
    <Input 
        type="password" 
        placeholder="Enter your password" 
        label="Password" />
  </React.Fragment>
);
