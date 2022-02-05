import styled from "styled-components";

export const CartItemContainer = styled.div`
    width: 100%;
    display: flex;
    height: 40%;
    margin-bottom: 1rem;

    img {
        height: 80%;
    }
`;

export const ItemDetailsContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 5%;
`;

export const Span = styled.span`
    padding: 0.3rem 0;
`;
