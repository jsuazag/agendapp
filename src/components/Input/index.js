import { InputWrapper, Label, InputType } from "./styles";

export const Input = ({ label, type, placeholder }) => {
  return (
    <section>
      <Label>{label}</Label>
      <InputWrapper>
        <InputType placeholder={placeholder} type={type} />
        {type === "password" && <i>icono</i>}
      </InputWrapper>
    </section>
  );
};
