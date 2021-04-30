import styled from "styled-components";
import {Theme1} from '../../themes/Theme1';

export const TopbarContainer = styled.div`
  //border: 1px solid red;
  display: flex;
  align-items: center;
  padding: 10px 20px;
`;

export const TopbarTitle = styled.div`
  flex: 1;
  text-align: center;
  h4 {
    font-size: 1.3em;
  }
`;

export const BackButtonTopbar = styled.div`
  cursor: pointer;
  svg {
    font-size: 1.2em;
    color: #888;
    &:hover {
        color: ${Theme1.primary}
    }
  }
`;
