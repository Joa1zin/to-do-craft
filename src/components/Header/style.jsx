import styled from "styled-components";

export const StyleHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    margin: 0 200px;
    padding: 20px;
    background: ${(p) => p.theme.blueDark};
    background-image: url("../portal.png");
    border-radius: 10px;
    border: solid black 3px;
    

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        height: auto;
        padding: 0.8rem 1.4rem;
        border: solid 2px ${(p) => p.theme.black};
        border-radius: 6px;
        font-size: 14px;
        text-decoration: none;
        text-transform: capitalize;
        cursor: pointer;
        overflow: hidden;
        gap: 10px;
    }

    input{
        display: inline-block;
        height: auto;
        border: solid 2px ${(p) => p.theme.black};
        border-radius: 6px;
        font-size: 14px;
        text-decoration: none;
        cursor: pointer;
        overflow: hidden;
        padding: 1rem;
        width: 500px;
    }

    select{
        display: inline-block;
        height: auto;
        border: solid 2px ${(p) => p.theme.black};
        border-radius: 6px;
        font-size: 14px;
        text-decoration: none;
        text-transform: capitalize;
        cursor: pointer;
        overflow: hidden;
        padding: 0.8rem 1.4rem;
        width: 188px;
    }
`