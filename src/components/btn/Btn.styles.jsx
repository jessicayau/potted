import styled, { css } from "styled-components";

const primaryBtnStyles = css`
    background-color: var(--button-hover-primary-bgcolor);
`;
const secondaryBtnStyles = css`
    background-color: var(--button-hover-secondary-bgcolor);
`;
const googleBtnStyles = css`
    background-color: var(--button-hover-google-bgcolor);
`;

const getBtnStyles = (props) => {
    if (props.googleBtn) {
        return googleBtnStyles;
    } else {
        return props.secondaryBtn ? secondaryBtnStyles : primaryBtnStyles;
    }
};

export const StyledButton = styled.button`
    width: 100%;
    letter-spacing: 0.5px;
    padding: 0.5rem 0;
    font-size: 15px;
    text-transform: uppercase;
    font-family: "Quicksand", sans-serif;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--button-bgcolor);
    color: var(--button-text-color);
    border: 1px solid black;

    &:hover {
        ${getBtnStyles}
        color: var(--button-hover-text-color);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
`;
