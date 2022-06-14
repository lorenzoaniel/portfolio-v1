import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
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