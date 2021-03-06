import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/images/plant-logo.svg";

export const HeaderContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 9vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: var(--header-color);
    z-index: 2;

    @media screen and (min-width: 768px) {
        position: static;
    }
`;

export const LogoContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-end;
`;

export const StyledLink = styled.a`
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 700;
`;

export const PlantLogo = styled(Logo)`
    height: 100%;
    max-height: 3rem;
`;

export const Brand = styled.span`
    font-size: 1.3rem;
    color: black;
`;

export const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BasketContainer = styled.button`
    height: 100%;
    margin: 0 1rem;
    position: relative;
    display: flex;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

export const ItemCounter = styled.span`
    position: absolute;
    right: -20%;
    bottom: -40%;
    padding: 0.1rem 0.4rem;
    color: black;
    background: var(--header-color);
    border-radius: 50%;
    font-size: 0.9rem;
    border: 1px solid grey;
`;

export const ToggleBtn = styled.button`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: none;
        width: 1.6rem;
        height: 1.6rem;
        padding: 0;
        cursor: pointer;
        z-index: 2;
    }
`;

export const Line = styled.span`
    position: relative;
    width: 24px;
    height: 2px;
    padding: 0;
    background-color: ${(props) =>
        props.menuIsOpen ? "transparent" : "black"};
    border-radius: 5px;
    transition: all 250ms ease-in-out;

    &::before,
    &::after {
        content: "";
        position: absolute;
        left: 0;
        width: 24px;
        height: 2px;
        background-color: ${(props) =>
            props.menuIsOpen ? "#a0cfb0" : "black"};
        border-radius: 5px;
        transition: all 250ms ease-in-out;
    }

    &::before {
        transform: ${(props) =>
            props.menuIsOpen ? "rotate(-135deg)" : "translateY(-.5rem)"};
    }

    &::after {
        transform: ${(props) =>
            props.menuIsOpen ? "rotate(135deg)" : "translateY(.5rem)"};
    }
`;
