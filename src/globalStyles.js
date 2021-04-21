import styled, {createGlobalStyle} from "styled-components";

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
