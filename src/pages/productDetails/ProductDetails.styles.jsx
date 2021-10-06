import styled from "styled-components";
import Btn from "../../components/btn/Btn";


export const ProductDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    @media screen and (min-width: 600px) {
        flex-direction: row;
        justify-content: center;
        column-gap: 5%;
        padding: 2rem 1rem;
    }
`

export const ImageContainer = styled.div`
    width: 70%;
    margin: 1rem auto;
    
    @media screen and (min-width: 426px) {
        width: 60%;  
    }

    @media screen and (min-width: 600px) {
        width: 45%;
        margin: 1rem 0;
    }

    @media screen and (min-width: 1024px) {
        width: auto;
        height: 80vh;
        margin: 1rem 0;
    }
`

export const Image = styled.img`
    width: 100%;
    
    @media screen and (min-width: 1024px) {
        height: 100%;
    }
`

export const FavoriteIconContainer = styled.div`
    display: none;

    @media screen and (min-width: 1024px) {
        width: 9.7rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    } 
`

export const SideIconsContainer = styled.div`
    position: absolute;
    top: 3%;
    left: 0;
    right: 0;
    height: 6%;
    display: flex;
    padding-right: 1.5rem;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 1024px) {
        display: none;
    }
`

export const BackButtonContainer = styled.div`
    height: 100%;
    min-width: 3rem;
    max-width: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: .6rem;
    border-bottom-right-radius: .6rem; 
    background-color: #e7f1e7dc;
    opacity: .6;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`


export const DetailsContainer = styled.div`
    padding: 2rem 10% 2.5rem;
    background-color: #c1dfc7dc;
    border-top-right-radius: 1.5rem;
    border-top-left-radius: 1.5rem;

    @media screen and (min-width: 600px) {
        width: 55%;
        padding: 2rem 1rem 1.5rem;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

export const ProductTitle = styled.h1`
    padding-bottom: .5rem;
`

export const ProductPrice = styled.h2`
    font-size: 1.25rem;
`

export const ProductDescription = styled.p`
    padding-bottom: .5rem;
`

export const PetFriendlyContainer = styled.div`
    display: flex;
    align-items: center;
    padding: .5rem 0;
`

export const Specs = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 0;

    .specs {
        display: flex;
    }

    @media screen and (min-width: 321px) {
        justify-content: start;

        .specs:nth-child(2) {
            padding-left: 1rem;
        }
    }
`

export const AddToCartBtn = styled(Btn)`
    width: 100%;
    align-self: center;
    margin-top: 1rem;

    @media screen and (min-width: 1024px) {
        width: 40%;
        align-self: start;
    }
`