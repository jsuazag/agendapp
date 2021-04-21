import styled from "styled-components";

export const ItemWrapper = styled.div`
    svg {
        color: #C7C7CC;
        font-size: 1.2em;
    }
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    flex: 1;
    cursor: pointer;

    &:hover{
        svg, p {
            color: #0066FF;
        }
    }
    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
    }
`;

export const Label = styled.p`
    line-height: 0px;
    color: #C7C7CC;
    font-size: 0.95em;
`;
