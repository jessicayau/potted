import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
    margin-top: 5%;
`;

export const Header = styled.h1`
    text-align: center;

    @media screen and (min-width: 768px) {
        font-size: 4vw;
    }
`;

export const CheckoutContainer = styled.div`
    padding: 5% 5% 4rem;
    display: grid;
    row-gap: 2rem;

    @media screen and (min-width: 600px) {
        grid-template-columns: 1fr 1fr;
        gap: 5%;
    }

    @media screen and (min-width: 1024px) {
        grid-template-columns: 1.5fr 1fr;
        gap: 10%;
        padding: 5% 8%;
    }
`;

export const Title = styled.h2`
    font-size: 1.5rem;
    margin-top: 1rem;
`;

export const OrderSummaryContainer = styled.div`
    @media screen and (min-width: 600px) {
        order: 2;
    }
`;

export const OrderSummary = styled.div`
    height: 500px;
    padding: 1rem;
    box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08);
`;

export const ItemsContainer = styled.div`
    height: 65%;
    margin: 1rem 5% 1.5rem;
    overflow-y: auto;
`;

export const Costs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 1rem 5% 0;
`;
export const Cost = styled.span`
    line-height: 1.5rem;

    &:last-child {
        font-weight: 700;
        font-size: 1.3rem;
        line-height: 2rem;
    }
`;
