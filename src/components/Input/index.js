import React, { useState } from "react";
import { InputWrapper, Label, InputType } from "./styles";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Icono = ({ showEye, onPress }) => (
  <span onClick={onPress}>{showEye ? <FaEyeSlash /> : <FaEye />}</span>
);

export const Input = ({ label, type, placeholder }) => {
  const [typeInput, setTypeInput] = useState(type);

  const toogleTypeInput = (e) => {
    setTypeInput(typeInput === "password" ? "text" : "password");
  };

  return (
    <section>
      <Label>{label}</Label>
      <InputWrapper>
        <InputType placeholder={placeholder} type={typeInput} />
        {type === "password" && (
          <Icono onPress={toogleTypeInput} showEye={typeInput === "text"} />
        )}
      </InputWrapper>
    </section>
  );
};
