import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser, signOutStart } from "../../redux/user/userSlice";
import { NavbarContainer, NavItem, StyledLink } from "./Navbar.styles";

const Navbar = ({ menuIsOpen, setMenuIsOpen }) => {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const signOutHandler = () => dispatch(signOutStart());

    const menuHandler = () => {
        if (menuIsOpen) {
            setMenuIsOpen(!menuIsOpen);
        } else return;
    };

    return (
        <NavbarContainer menuIsOpen={menuIsOpen}>
            <StyledLink exact to="/">
                <NavItem onClick={menuHandler}>Home</NavItem>
            </StyledLink>
            <StyledLink to="/shop">
                <NavItem onClick={menuHandler}>Shop</NavItem>
            </StyledLink>
            <StyledLink to="/about">
                <NavItem onClick={menuHandler}>About</NavItem>
            </StyledLink>
            <StyledLink to="/favorites">
                <NavItem onClick={menuHandler}>Favorites</NavItem>
            </StyledLink>
            <StyledLink to="/contact">
                <NavItem onClick={menuHandler}>Contact</NavItem>
            </StyledLink>
            {currentUser ? (
                <StyledLink as="div" onClick={signOutHandler}>
                    <NavItem onClick={menuHandler}>Sign Out</NavItem>
                </StyledLink>
            ) : (
                <StyledLink to="/login">
                    <NavItem onClick={menuHandler}>Login</NavItem>
                </StyledLink>
            )}
        </NavbarContainer>
    );
};

export default Navbar;
