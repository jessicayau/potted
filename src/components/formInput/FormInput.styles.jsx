import styled, { css } from 'styled-components';

const primaryColor = 'black';
const secondaryColor = 'grey';

const shrinkLabelStyles = css`
    top: -1.2rem;
    font-size: .9rem;
    color: ${primaryColor};
`

export const GroupContainer = styled.div`
    position: relative;
    margin: 1.5rem 0;

    input[type='password'] {
        letter-spacing: 0.3rem;
    }
`

export const FormInputContainer = styled.input`
    background: none;
    background-color: white;
    color: ${secondaryColor};
    font-size: 1.125rem;
    font-family: 'Quicksand', sans-serif;
    padding: .5rem;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${secondaryColor};

    &:-internal-autofill-selected {
        transition: background-color 100000000s;
        animation: 1ms void-animation-out;
    }

    &:-webkit-autofill {
    -webkit-text-fill-color: black;
    /* Hack to hide the default webkit autofill */
    transition: background-color 100000000s;
    animation: 1ms void-animation-out;
    }

    &::placeholder {
        color: #87bbfd;
    }

    &:focus {
        outline: none;
    }

    &:focus ~ label {
        ${shrinkLabelStyles}
    }
    
    @keyframes void-animation-out {
        0%,
        to {
            opacity: 1;
        }
    }
`

export const FormInputLabel = styled.label`
    color: #949cc4;
    font-size: 1rem;
    font-weight: 700;
    position: absolute;
    pointer-events: none;
    left: .4rem;
    top: .625rem;
    transition: 300ms ease all;

    &.shrink {
        ${shrinkLabelStyles}
    }
`