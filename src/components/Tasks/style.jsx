import styled from "styled-components";

export const StyleTasks = styled.div`
    background: ${(p) => p.theme.grey};
    padding: 16px;
    border-radius: 8px;
    border: 4px solid ${(p) => p.theme.greyLight};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    .check{
        width: 18px;
        height: 18px;
        background: none;
        border: none;
    }

    .check div{
        width: 100%;
        height: 100%;
        border-radius: 5px;
        border: 2px solid ${(p) => p.theme.white} ;
    }

    p{
        margin-right: auto;
        color:${(p) => p.theme.white};
    }

    .bcontainer{
        display: flex;
        gap: 8px;
    }

    .bcontainer button{
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

`