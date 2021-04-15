import { StyleButton } from "./styles";

export const Button = ({text, bgColor, color, onPress}) => (
    <StyleButton onClick={onPress}>{text}</StyleButton>
);
