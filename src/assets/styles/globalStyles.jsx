import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --header-color: aliceblue;
        --label-color: #949cc4;
        --error-color: #eb437b;
        --primary-bgcolor: #e7f1e7dc;
        --secondary-bgcolor: #c1dfc7dc;
        --card-bgcolor: aliceblue;
        --button-bgcolor: black;
        --button-hover-primary-bgcolor: white;
        --button-hover-secondary-bgcolor: #a0cfb05c;
        --button-hover-google-bgcolor: #cef0f581;
        --button-text-color: white;
        --button-hover-text-color: black;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        max-width: 2000px;
        margin: 0 auto;
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
`;

export default GlobalStyle;
