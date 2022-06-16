import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;

        /* FONT */
        font-family: 'Iceberg', cursive;
        font-weight: 400;
        text-decoration: none; 
        letter-spacing: 0.1em;
        text-shadow: 0 0.1rem 0.1rem rgba(0,0,0,0.5);
    }

    html {
        min-height: 667px;
        height: 100vh;
        min-width: 375px;
    }

    body, #root {
        color: #FFFFFF;
        height: 100%;
    }
`;

export default GlobalStyle;