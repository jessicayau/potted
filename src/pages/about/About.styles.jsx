import styled from "styled-components";

export const AboutPageContainer = styled.div`
    margin: 10% 5% 3rem;

    @media screen and (min-width: 768px) {
        margin: 5%;
    }
`;

export const AboutTitle = styled.h1`
    @media screen and (min-width: 768px) {
        font-size: 4vw;
        padding-bottom: 1rem;
    }
`;

export const ContentContainer = styled.div`
    padding-bottom: 2rem;

    p {
        margin: 1rem 0;
    }
`;
