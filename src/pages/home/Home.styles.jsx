import styled from "styled-components";
import Btn from "../../components/btn/Btn";



export const Section = styled.section`
    padding: 2rem 6% 1rem;
    background-color: ${props => props.bgColor ? props.bgColor : ''};
`

export const SectionTitle = styled.h2`
    text-align: center;
`

export const AboutSection = styled.div`
    padding: 1rem 0;

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
    }
`
export const AboutContent = styled.div`
    text-align: center;
    padding-bottom: 1rem;

    /* h2 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }

    p {
        line-height: 1.5rem;
    } */

    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        grid-column: 2/3;
        grid-row: 1;
        text-align: left;

        /* h2 {
            font-size: 2rem;
        } */
    }
`

export const ImageContainer = styled.div`

    img {
        width: 100%;
    }

    @media screen and (min-width: 768px) {
        grid-column: 1/2;
        grid-row: 1;
    }
`

export const Cards = styled.div`
    width: 100%;
    padding: 2rem 10%;
    display: grid;
    gap: 1rem;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    row-gap: 2rem;

    @media screen and (min-width: 580px) and (max-width: 759px) {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
        padding: 2rem 5%;
        
    }

    @media screen and (min-width: 760px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        column-gap: 1rem;
        padding: 2rem 0;
    }
`

export const FindPlantContainer = styled.div`
    /* height: 40vw; */
    /* max-height: 300px; */
    width: 100%;
    margin: 2rem auto;
    background-color: #e7f1e7dc;
    border-bottom-left-radius: 2rem;
    border-top-right-radius: 2rem;
    position: relative;

    @media screen and (min-width: 490px) {
        height: 40vw;
        max-height: 250px;
    }
`

export const PlantImage = styled.img`
    height: 30vw;
    max-height: 330px;
    position: absolute;
    right: -6%;
    bottom: -20%;

    @media screen and (max-width:375px) {
        bottom: -35%;
        right: 50%;
        transform: translateX(50%);
        width: 80%;
        height: auto;
    }
`
export const FindPlantContent = styled.div`
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 1rem;


        @media screen and (min-width: 768px) {
            width: 50%;
        }
`

export const FindPlantText = styled.p`

`

export const FindPlantButton = styled(Btn)`
    width: 40%;
    min-width: 120px;
    /* margin-top: 1rem; */
`

