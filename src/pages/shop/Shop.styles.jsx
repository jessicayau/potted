import styled from "styled-components";

export const ShopContainer = styled.div`
    margin-bottom: 5rem;
`

export const BannerContainer = styled.div`
    position: relative;
    display: flex;

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
    gap: 2rem;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 200px);

    @media screen and (max-width: 425px) {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
`

export const Filters = styled.div`
    display: flex;
    justify-content: center;

    div {
        width: 100%;
        max-width: 350px;
    }
`