import React, { useState } from "react";
import { InputWrapper, InputType, InputContainer, IconWrapper } from "./styles";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const iconStyle = {
  fontSize: "20px",
  color: "#ccc",
};

const Icono = ({ showEye, onPress }) => (
  <IconWrapper onClick={onPress}>
    {showEye ? <FaEyeSlash style={iconStyle} /> : <FaEye style={iconStyle} />}
  </IconWrapper>
);

export const Input = ({ type, placeholder, icon:Icon, register = () => {}, name, rules }) => {
  const [typeInput, setTypeInput] = useState(type);

  const toogleTypeInput = (e) => {
    setTypeInput(typeInput === "password" ? "text" : "password");
  };

  return (
    <InputContainer>
      <InputWrapper>
        <InputType {...register(name, rules)} placeholder={placeholder} type={typeInput} />
        {type === "password" && (
          <Icono onPress={toogleTypeInput} showEye={typeInput === "text"} />
        )}
        {
          type !== "password" && Icon && (
            <IconWrapper>
              <Icon style={iconStyle} />
            </IconWrapper>
          )
        }
      </InputWrapper>
    </InputContainer>
  );
};
