import React from 'react'
import { NavbarContainer, NavItem, StyledLink } from './Navbar.styles'

const Navbar = ({ menuIsOpen, setMenuIsOpen }) => {
    return (
        <NavbarContainer menuIsOpen={menuIsOpen} onClick={() => setMenuIsOpen(!menuIsOpen)}>
            <StyledLink exact to='/'>
                <NavItem>Home</NavItem>
            </StyledLink>
            <StyledLink to='/shop'>
                <NavItem>Shop</NavItem>
            </StyledLink>
            <StyledLink to='/about'>
                <NavItem>About</NavItem>
            </StyledLink>
            <StyledLink to='/contact'>
                <NavItem>Contact</NavItem>
            </StyledLink>
            <StyledLink to='/login'>
                <NavItem>Login</NavItem>
            </StyledLink>
        </NavbarContainer>
    )
}

export default Navbar
