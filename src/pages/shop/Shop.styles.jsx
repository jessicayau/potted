import styled from "styled-components";

export const ShopContainer = styled.div`
    margin-bottom: 5rem;
`

export const BannerContainer = styled.div`
    position: relative;
    display: flex;
    /* background-color: lightblue; */

    &::after {
        content: '';
        height: 2px;
        width: 60%;
        min-width: 280px;
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%);
        background-color: #e7f1e7dc;
    }
`

export const Banner = styled.img`
    width: 60%;
    min-width: 280px;
    max-width: 600px;
    margin: 0 auto;

`

export const ProductsContainer = styled.div`
    width: 100%;
    padding: 3rem 5%;
    display: grid;
    column-gap: 1rem;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
    row-gap: 2rem;

    /* @media screen and (min-width: 580px) and (max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1rem;
    } */


    /* @media screen and (min-width: 760px) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        column-gap: 2rem;
        padding: 3rem 5%;
    } */

    @media screen and (min-width: 480px) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        column-gap: 2rem;
    }
`

export const Filters = styled.div`
    padding: 1rem;
`