import styled from "styled-components";

export const CheckoutItemContainer = styled.tr`
    width: 100%;
    min-height: 6.25rem;
    font-size: 1.25rem;

    @media screen and (max-width: 425px) {
        font-size: 1rem;
    }
`

export const CheckoutItemData = styled.td`
    text-align: center;
    border-bottom: 1px solid darkgrey;
    padding-bottom: 1rem;

    & .remove-btn {
        cursor: pointer;

        &:hover {
            font-weight: 700;
        }
    }
`

export const CheckoutItemProduct = styled(CheckoutItemData)`
    display: flex;
    align-items: center;

    @media screen and (max-width: 767px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const CheckoutItemImageContainer = styled.div`
    min-width: 5rem;
    width: 7vw;
    min-height: 6.25rem;
    height: 8vw;
    margin-right: 1.5rem;
`

export const CheckoutItemImage = styled.img`
    width: 100%;
    height: 100%;
`

export const CheckoutItemName = styled.span`
    text-align: left;

    @media screen and (max-width: 767px) {
        padding-top: .5rem;
    }
`

export const CheckoutItemQuantity = styled.span`
    display: flex;
    justify-content: center;
`

export const Arrow = styled.span`
    cursor: pointer;
    margin: 0 .625rem;
`
