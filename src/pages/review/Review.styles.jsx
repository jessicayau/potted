import styled from 'styled-components';

export const ReviewContainer = styled.div`
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5% 15% 4rem;

    @media screen and (max-width: 425px ) {
        width: 100%;
        padding: 5%;
        margin: 5% 0 4rem;
    }
`
export const CheckoutTotal = styled.span`
    align-self: flex-end;
    margin-top: 1.5rem;
    font-size: 1.5rem;
    font-weight: 500;

    @media screen and (max-width: 425px ) {
        width: 100%;
        font-size: 1.3rem;
        font-weight: 500;
        text-align: right;
    }
`

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    row-gap: 1.5rem;

    & .button {
        gap: .5rem;
    }

    @media screen and (min-width: 600px ) {
        flex-direction: row;
        justify-content: space-between;

        & .button {
            width: 40%;
            max-width: 200px;
        }
    }
`