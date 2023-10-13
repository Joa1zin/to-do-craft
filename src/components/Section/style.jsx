import styled from "styled-components";

export const StyleSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin: 20px 200px 0 200px;
    padding: 20px;
    background-image: url("../obsidian.png");
    border-radius: 10px;
    border: solid black 3px;
    color: ${(p) => p.theme.white};
`