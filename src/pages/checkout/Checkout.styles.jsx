import styled from 'styled-components';

export const CheckoutPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5% 0 4rem;

    @media screen and (max-width: 425px ) {
        width: 100%;
        padding: 5%;
    }
`

export const CheckoutTable = styled.table`
    display: ${props => props.numCartItems < 1 ? "none" : "table"};
    width: 75%;
    margin-top: 1.5rem;
    border-collapse: separate;
    border-spacing: 0 1rem;

    @media screen and (max-width: 425px ) {
        width: 100%;
    }
`
export const TableHeader = styled.tr`
    margin-bottom: 1rem;

    @media screen and (max-width: 425px ) {
        font-size: 1.2rem;
    }
`

export const HeaderTitle = styled.th`
    text-align: center;
    font-size: 1.2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid darkgrey;

    &:first-child {
        text-align: left;
    }

    @media screen and (max-width:425px) {
        font-size: 1rem;
    }
`

export const CheckoutTotal = styled.span`
    width: 75%;
    text-align: right;
    margin-top: 1.5rem;
    font-size: 1.5rem;
    font-weight: 500;

    @media screen and (max-width: 425px ) {
        width: 100%;
        font-size: 1.3rem;
        font-weight: 500;
    }
`

export const TestMessage = styled.div`
    text-align: center;
    font-size: 1.2rem;
    color: red;
    margin: 3% 0 2%;

    @media screen and (max-width: 425px ) {
        font-size: 1rem;
    }
`

