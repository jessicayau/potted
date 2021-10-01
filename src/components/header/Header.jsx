import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Cart from '../cart/Cart';
import { FaShoppingBag } from 'react-icons/fa';
import { BasketContainer, Brand, HeaderContainer, ItemCounter, Line, LogoContainer, NavWrapper, PlantLogo, StyledLink, ToggleBtn } from './Header.styles';

const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);


    return (
        <HeaderContainer menuIsOpen={menuIsOpen}>
            <LogoContainer>
                <StyledLink to="/">
                    <PlantLogo />
                    <Brand>Potted</Brand>
                </StyledLink>
            </LogoContainer>
            <NavWrapper>
                <Navbar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
                <BasketContainer>
                    <FaShoppingBag  size="1.6rem" />
                    <ItemCounter>50</ItemCounter>
                </BasketContainer>
                <ToggleBtn onClick={() => setMenuIsOpen(prev => !prev)}>
                    <Line menuIsOpen={menuIsOpen}></Line>
                </ToggleBtn>
            </NavWrapper>
            <Cart />
        </HeaderContainer>
    )
}

export default Header
