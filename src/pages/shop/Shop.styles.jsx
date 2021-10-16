import styled from "styled-components";

export const ShopContainer = styled.div`
    margin-bottom: 4rem;
`;

export const BannerContainer = styled.div`
    position: relative;
    display: flex;

    &::after {
        content: "";
        border-bottom: 2px solid var(--primary-bgcolor);
        font-size: 8vw;
        font-weight: 700;
        letter-spacing: 1.5rem;
        text-align: right;
        width: 60%;
        min-width: 280px;
        padding-bottom: 0.5rem;
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export const Banner = styled.img`
    width: 60%;
    min-width: 280px;
    max-width: 600px;
    margin: 0 auto;
`;

export const ProductsContainer = styled.div`
    width: 100%;
    padding: 3rem 5%;
    display: grid;
    gap: 2rem;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 200px);
    animation: fade 250ms ease-out;

    @media screen and (max-width: 425px) {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
`;

export const SearchFilter = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    padding: 0 5%;
`;

export const SearchInput = styled.input`
    width: 100%;
    max-width: 300px;
    padding: 0 0.5rem;
    border: none;
    border-bottom: 1px solid grey;
    font-size: 1rem;
    line-height: 2rem;

    &:focus {
        outline: none;
    }
`;
