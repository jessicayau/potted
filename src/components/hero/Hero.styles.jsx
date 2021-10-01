import styled from "styled-components";
import Btn from "../btn/Btn";

export const HeroContainer = styled.div`
    position: relative;

`

export const ImageContainer = styled.div`

`

export const Image = styled.img`
    display: block;
    width: 100%;
    max-height: 45vw;
`

export const Content = styled.div`
    max-width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 6%;
`

export const Title = styled.h1`
    font-size: 4vw;

    @media screen and (max-width: 424px) {
        font-size: 1.1rem;
    }
`

export const Text = styled.p`
    margin: 1rem 0;
    line-height: 1.5rem;

    @media screen and (max-width: 699px) {
        display: none;
    }
`

export const HeroButton = styled(Btn)`
    margin-top: 1rem;

    @media screen and (max-width:424px) {
        font-size: .7rem;
        height: 2rem;
        margin-top: .5rem;
    }
`