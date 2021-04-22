import styled from "styled-components";

export const TaskWrapper = styled.div`
  border: 2px solid #f1f6ff;
  border-radius: 6px;
  margin: 10px 15px;
  padding: 10px;
  opacity: 0.85;
  a {
    text-decoration: none;
  }
  &:hover {
    opacity: 1;
  }
`;

export const Responsable = styled.p`
  font-size: 0.9em;
  color: #616161;
  margin: 0;
  padding: 0;
`;

export const TasksDetail = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const TimeLeft = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  svg {
    color: #616161;
  }
  p {
    font-size: 0.9em;
    color: #616161;
    margin: 0 10px;
    padding: 0;
  }
`;

export const TaskStatus = styled.p`
  font-size: 0.9em;
  color: #fff;
  margin: 0;
  padding: 3px 5px;
  background-color: ${props => props.color || '#666' };
  border-radius: 3px;
`;

export const TaskTitle = styled.h4`
  margin: 0;
  padding: 0;
  color: #222;
  font-size: 1.1em;
`;
