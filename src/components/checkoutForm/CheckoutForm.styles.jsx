import styled from "styled-components";
import Btn from '../btn/Btn';

export const Form = styled.form`
    animation: fade 250ms ease-out;
`

export const FormGroup = styled.fieldset`
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding: 0;
    border-style: none;
    will-change: opacity, transform;

    &.card {
        margin-top: .5rem;
        box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08);
    }
`
export const FormRow = styled.div`
    padding: 1rem .5rem;
`

export const FormGroupTitle = styled.h2`
    margin: 1rem 0 0;
    font-size: 1.5rem;
`

export const PaymentBtn = styled(Btn)`
    margin-top: 2rem;
    height: 3rem;
`

export const ErrorMessage = styled.div`
    display: flex;
    justify-items: center;
    margin-top: .8rem;
    transform: translateY(-15px);
    opacity: 0;
    animation: fade 250ms ease-out;
    animation-delay: 50ms;
    animation-fill-mode: forwards;
    will-change: opacity, transform;
`

export const TestMessage = styled.div`
    text-align: center;
    line-height: 1.5rem;
    color: #eb437b;
    margin: 1.5rem 0;

    @media screen and (max-width: 425px ) {
        font-size: 1rem;
    }
`

export const SuccessTitle = styled.h2`
    font-size: 1.5rem;
    margin-top: 1rem;
`

export const SuccessMessage = styled.p`
    font-size: 1.1rem;
`
