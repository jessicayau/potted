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

    @keyframes fade {
        from {
            opacity: 0;
            transform: scale3D(0.95, 0.95, 0.95);
        }
        to {
            opacity: 1;
            transform: scale3D(1, 1, 1);
        }
    }
`

export default GlobalStyle;