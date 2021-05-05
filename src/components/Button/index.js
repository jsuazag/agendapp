import { StyleButton } from "./styles";

export const Button = ({
  text,
  bgColor,
  color,
  type = "button",
  onPress,
  disabled,
}) => (
  <StyleButton
    disabled={disabled}
    type={type}
    bgColor={bgColor}
    color={color}
    onClick={onPress}
  >
    {text}
  </StyleButton>
);
