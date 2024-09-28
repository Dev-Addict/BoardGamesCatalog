import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body, #root {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        font-family: 'Roboto', sans-serif;
    }

    * {
        box-sizing: border-box;
        user-select: none;
    }

    input, textarea {
        -webkit-user-select: text !important;
        user-select: text !important;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }
`;
