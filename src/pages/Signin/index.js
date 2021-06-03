import React from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { LinkTo } from "../../components/LinkTo";
import { useForm, Controller } from "react-hook-form";
import { FormGroup, PageWrapper } from "../../globalStyles";
import { LogoWrapper, TopLink } from "./styles";
import {LabelError} from '../../globalStyles';

export const Signin = () => {

  const {
    register,
    control,
    handleSubmit,
    formState: {
      errors,
      isValid
    }
  } = useForm({ mode: 'onChange' });

  const onSubmitCreate = (data) => {
    console.log("data form", data);
  };

  return (
    <PageWrapper>
      <TopLink>
        <LinkTo text="Sign up" url="/signup" />
      </TopLink>
      <LogoWrapper>
        <img src="./assets/logo-color.png" alt="logo" />
      </LogoWrapper>
      <form onSubmit={handleSubmit(onSubmitCreate)}>
        <FormGroup>
          <Input 
            register={register} 
            name="email" 
            rules={{ required: true }}
            label="Email address" 
            type="email" 
            placeholder="Enter your email" 
          />
          { errors.email?.type === 'required' && <LabelError>Field required</LabelError> }
        </FormGroup>
        <FormGroup>
          <Input 
            register={register} 
            name="password" 
            rules={{ required: true, minLength: 6 }}
            label="Password" 
            type="password" 
            placeholder="Enter your password" 
          />
          { errors.password?.type === 'required' && <LabelError>Field required</LabelError> }
          { errors.password?.type === 'minLength' && <LabelError>Min Length 6 characters</LabelError> }
        </FormGroup>
        <Button disabled={!isValid} type="submit" text="Sign in" />
      </form>
    </PageWrapper>
  );
};
