import styled from "styled-components";

export const StyledButton = styled.button`
    width: 100%;
    /* max-width: 270px; */
    /* width: auto; */
    /* height: 2.5rem; */
    letter-spacing: 0.5px;
    line-height: 2rem;
    /* padding: 0 35px 0 35px; */
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    border: 1px solid black;;

    &:hover {
        background-color: white;
        color: black;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        /* border: 1px solid black; */
    }
`