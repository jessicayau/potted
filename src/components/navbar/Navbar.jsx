import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser, signOutStart } from '../../redux/user/userSlice';
import { NavbarContainer, NavItem, StyledLink } from './Navbar.styles';

const Navbar = ({ menuIsOpen, setMenuIsOpen }) => {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const signOutHandler = () => dispatch(signOutStart());

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
            <StyledLink to='/favorites'>
                <NavItem>Favorites</NavItem>
            </StyledLink>
            <StyledLink to='/contact'>
                <NavItem>Contact</NavItem>
            </StyledLink>
            {currentUser ? (
                <StyledLink as="div" onClick={signOutHandler}>
                    <NavItem>Sign Out</NavItem>
                </StyledLink>
            ) : (
                <StyledLink to='/login'>
                    <NavItem>Login</NavItem>
                </StyledLink>
            )
            } 
        </NavbarContainer>
    )
}

export default Navbar;
