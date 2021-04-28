import styled from "styled-components";

export const TaskStatusLabel = styled.p`
    color: ${props => props.color || '#222' };
    font-size: 0.88em;
    font-weight: bold;
`;

export const TaskTitle = styled.h3`
    color: #333;
    font-size: 1.3em;
    font-weight: 400;
`;

export const TaskDescription = styled.p`
    color: #666;
    font-size: 1em;
    font-weight: 300;
`;

export const TaskDueDate = styled.p`
    color: #666;
    font-size: 0.88em;
    font-weight: 300;
`;

export const TaskResponsable = styled.p`
    color: #666;
    font-size: 1.1em;
    font-weight: 400;
`;

export const TaskFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
