import styled from "styled-components";

export const StyleHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    margin: 0 200px;
    padding: 20px;
    background: ${(p) => p.theme.blueDark};
    border-radius: 10px;
    border: solid black 3px;
`