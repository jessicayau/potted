import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.nav`
    display: flex;
    font-size: 0.8rem;

    @media screen and (max-width: 768px) {
        position: fixed;
        top: 0;
        left: 0;
        height: 40%;
        width: 100%;
        padding: 1.2rem 0;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background-color: white;
        border-bottom: 1px solid grey;
        color: black;
        font-size: 1rem;
        z-index: 1;
        transform: ${(props) =>
            props.menuIsOpen ? "translateX(0)" : "translateX(-110%)"};
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

        &::before {
            content: "";
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            background-color: transparent;
            overflow: hidden;
        }
    }
`;

export const StyledLink = styled(NavLink)`
    color: initial;
    text-decoration: none;
    margin-left: 1rem;

    &.active {
        font-weight: bold;
    }

    &.active span:hover {
        &::after {
            transform: scaleX(0);
        }
    }
`;

export const NavItem = styled.span`
    position: relative;
    letter-spacing: 0.2rem;
    line-height: 1.5rem;

    &::after {
        content: "";
        width: 100%;
        height: 2px;
        background-color: var(--label-color);
        border-radius: 0.5rem;
        position: absolute;
        bottom: -35%;
        left: 0;
        right: 0;
        transform: scaleX(0);
        transform-origin: left;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }

    &:hover {
        &::after {
            transform: scaleX(1);
        }
    }
`;
