import React from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { LinkTo } from "../../components/LinkTo";
import { useForm } from "react-hook-form";
import { FormGroup, PageWrapper } from "../../globalStyles";
import { LogoWrapper, TopLink } from "./styles";
import {LabelError} from '../../globalStyles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLogin } from '../../store';

export const Signin = () => {

  const dispatch = useDispatch();
  const userData = useSelector(state => state.user) ;

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isValid
    }
  } = useForm({ mode: 'onChange' });

  const onSubmitLogin = (data) => {
    console.log("data form", data);
    dispatch(fetchLogin(data));
  };

  return (
    <PageWrapper>
      <TopLink>
        <LinkTo text="Sign up" url="/signup" />
      </TopLink>
      <LogoWrapper>
        <img src="./assets/logo-color.png" alt="logo" />
      </LogoWrapper>
      {
        userData.error && <LabelError>Email or Password incorrect</LabelError>
      }
      <form onSubmit={handleSubmit(onSubmitLogin)}>
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
        <Button 
          disabled={!isValid} 
          type="submit"
          text={ userData.loading ? 'Checking...' : 'Sign in'} />
      </form>
    </PageWrapper>
  );
};
