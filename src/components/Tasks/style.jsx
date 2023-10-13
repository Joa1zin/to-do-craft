import styled from "styled-components";

export const StyleTask = styled.div`
    width: 100%;
    background-color: ${(p) => p.theme.grey};
    border: 3px solid ${(p) => p.theme.greyLight};
    padding: 16px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    .container-check-text{
        display: flex;
        gap: 15px;
    }

    .container-icons{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px;
        gap: 15px;
    }

    .title-text{
        font-size: 18px;
    }

    .date-text{
        font-size: 12px;
    }

    .icon{
        cursor: pointer;
    }
`