import styled from "styled-components";
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/plant-logo.svg';


export const HeaderContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 9vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 1rem;
    background-color: aliceblue;
    z-index: 2;

    @media screen and (min-width: 768px) {
        position: static;
    }
`

export const LogoContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-end;
`

export const StyledLink = styled(Link)`
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 700;
`

export const PlantLogo = styled(Logo)`
    height: 100%;
    max-height: 3rem;
`

export const Brand = styled.span`
    font-size: 1.3rem;
    color: black;
`

export const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BasketContainer = styled.div`
    height: 100%;
    margin: 0 1rem;
    position: relative;
    display: flex;
    justify-content: center;
`

export const ItemCounter = styled.span`
    position: absolute;
    right: -40%;
    bottom: -50%;
    padding: .2rem .3rem;
    color: black;
    background: lightblue;
    border-radius: 50%;
    font-size: .9rem;
`

export const ToggleBtn = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1.6rem;
        height: 1.6rem;
        cursor: pointer;
        z-index: 2;
    }
`

export const Line = styled.p`
    position: relative;
    width: 24px;
	height: 2px;
	background-color: ${props => props.menuIsOpen ? 'transparent' : 'black'};
	border-radius: 5px;
	transition: all 250ms ease-in-out;

    &::before, &::after {
        content: '';
        width: 24px;
        height: 2px;
        background-color: ${props => props.menuIsOpen ? 'paleturquoise' : 'black'};
        border-radius: 5px;
        transition: all 250ms ease-in-out;
        position: absolute;
    }

    &::before {
        transform: ${props => props.menuIsOpen ? 'rotate(-135deg)' : 'translateY(-.5rem)'};
    }

    &::after {
        transform: ${props => props.menuIsOpen ? 'rotate(135deg)' : 'translateY(.5rem)'};
    }
`