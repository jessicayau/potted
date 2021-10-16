import styled from "styled-components";
import Btn from "../btn/Btn";

export const HeroContainer = styled.div`
    background-image: url("/images/slider3.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 50vw;
    max-height: 900px;
`;

export const Content = styled.div`
    max-width: 35%;
    height: 100%;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.h1`
    font-size: 5vw;

    @media screen and (max-width: 424px) {
        font-size: 6vw;
    }

    @media screen and (min-width: 2000px) {
        font-size: 6.25rem;
    }
`;

export const Text = styled.p`
    margin: 1rem 0;
    line-height: 1.5rem;
    font-size: 1.2rem;

    @media screen and (max-width: 699px) {
        display: none;
    }
`;

export const HeroButton = styled(Btn)`
    margin-top: 1rem;
    width: 100%;
    max-width: 350px;

    @media screen and (max-width: 424px) {
        font-size: 0.7rem;
        height: 2rem;
        margin-top: 0.5rem;
    }
`;
