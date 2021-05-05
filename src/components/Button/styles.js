import styled from "styled-components";

export const StyleButton = styled.button`
    width: 100%;
    background-color: ${props => props.bgColor || '#FA7A01'};
    color: ${props => props.color || '#FFF'};
    border-color: ${props => props.bgColor || '#FA7A01'};
    opacity: ${props => props.disabled ? 0.6: 1 };
    border-width: 1;
    border-style: solid;
    cursor: pointer;
    padding: 10px 10px;
    text-align: center;
    font-size: 0.96em;
    border-radius: 10px;
    font-weight: bold;
    outline: none;
`;
