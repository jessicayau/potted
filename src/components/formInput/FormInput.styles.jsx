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
    padding: .5rem;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${secondaryColor};

    &:focus {
        outline: none;
    }

    &:focus ~ label {
        ${shrinkLabelStyles}
    }
`

export const FormInputLabel = styled.label`
    color: ${secondaryColor};
    font-size: 1rem;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: .4rem;
    top: .625rem;
    transition: 300ms ease all;

    &.shrink {
        ${shrinkLabelStyles}
    }
`