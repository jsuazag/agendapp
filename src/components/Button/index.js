import { StyleButton } from "./styles";

export const Button = ({text, bgColor, color, type = 'button', onPress}) => (
    <StyleButton type={type} bgColor={bgColor} color={color} onClick={onPress}>{text}</StyleButton>
);
