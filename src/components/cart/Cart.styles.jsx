import styled from 'styled-components';
import Btn from '../btn/Btn';
import { IoMdClose } from 'react-icons/io';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 100%;
    min-height: 340px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    top: 0;
    right: 0;
    z-index: 5;

    @media screen and (min-width: 500px) {
        min-width: 350px;
        width: 40%;
        border-left: 1px solid black;
        border-bottom: 1px solid black;
    }
`;

export const CloseCartBtn = styled(IoMdClose)`
    margin-right: auto;
    cursor: pointer;
`

export const ClearCartBtn = styled.span`
    margin-top: 1rem;
    margin-right: auto;
    font-weight: 500;
    cursor: pointer;
    

    &:hover {
        font-weight: 700;
    }
`

export const GoToCheckoutBtn = styled(Btn)`
    margin: auto 0 1rem;
`;

export const EmptyMessageContainer = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
    /* height: 240px; */
    height: 75%;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;