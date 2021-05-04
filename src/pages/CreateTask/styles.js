import styled from "styled-components";
import { Theme1 } from "../../themes/Theme1";

export const Textarea = styled.textarea`
    width: 100%;
    font-family: 'Roboto';
    font-size: 1.1em;
    padding: 10px 15px;
    box-sizing: border-box;
    border-width: 1;
    border-style: solid;
    border-color: ${ props => props.errors ? Theme1.danger : '#ccc' };
    outline: none;
`;

export const LabelError = styled.span`
    color: ${ Theme1.danger };
    font-weight: bold;
`;
