import styled from "styled-components";
import Btn from "../btn/Btn";

export const CartOverviewContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
    background-color: white;
    top: 0;
    right: 0;
    z-index: 5;
    transition: all 2s ease;

    &::before {
        content: "";
        width: 100vw;
        height: 100%;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        background-color: transparent;
        overflow: hidden;
    }

    @media screen and (min-width: 500px) {
        width: 350px;
        border-left: 1px solid grey;
        border-bottom: 1px solid grey;
    }
`;

export const CloseCartBtn = styled.button`
    background-color: transparent;
    border: none;
    margin-right: auto;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`;

export const ClearCartBtn = styled.button`
    background-color: transparent;
    border: none;
    margin-top: 1rem;
    margin-right: auto;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        font-weight: 700;
    }
`;

export const GoToCheckoutBtn = styled(Btn)`
    margin: auto 0 1rem;
    justify-self: flex-end;
`;

export const EmptyCartMessage = styled.span`
    font-size: 1.125rem;
    margin: 3.125rem auto;
`;

export const CartItemsContainer = styled.div`
    height: 75%;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;
