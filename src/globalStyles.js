import styled, {createGlobalStyle} from "styled-components";
import { Theme1 } from "./themes/Theme1";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
  }
  a {
    text-decoration: none;
  }
`;

export const PageWrapper = styled.div`
  padding: 15px 20px;
`;

export const PageWrapperMenu = styled.div`
  padding: 15px 15px 71px;
`;

export const FormGroup = styled.div`
  margin: 10px 0px;
  label {
    font-size: 0.95em;
    color: ${Theme1.grayText}
  }
`;

export const LabelError = styled.span`
    color: ${ Theme1.danger };
    font-weight: bold;
`;
