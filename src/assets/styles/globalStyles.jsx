import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        font-family: 'Quicksand', sans-serif;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: black;
    }

    p,
    h1,
    h2,
    h3,
    h4 {
        margin: 0;
    }

    h2 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
        
        @media screen and (min-width: 768px) {
            font-size: 2rem;
        }
    }

    p {
        line-height: 1.5rem;
    }
`

export default GlobalStyle;