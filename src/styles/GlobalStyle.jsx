import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        width: 100%;
        min-height: 100vh;
        background-image: url('../public/wallpaper.jpg');
        background-size: cover;
        background-repeat: no-repeat; 
        backdrop-filter: blur(5px);
    }

    button{
        cursor: pointer;
    }

`