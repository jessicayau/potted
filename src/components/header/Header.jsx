import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../navbar/Navbar';
import Cart from '../cart/Cart';
import { FaShoppingBag } from 'react-icons/fa';
import { BasketContainer, Brand, HeaderContainer, ItemCounter, Line, LogoContainer, NavWrapper, PlantLogo, StyledLink, ToggleBtn } from './Header.styles';
import { selectCartHidden, selectCartItemsTotal, toggleCartHidden } from '../../redux/cart/cartSlice';


const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const isHidden = useSelector(selectCartHidden);
    const cartItemsTotal = useSelector(selectCartItemsTotal)
    const dispatch = useDispatch();

    const handleCartToggle = () => {
        dispatch(toggleCartHidden());
    }

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
                <BasketContainer onClick={handleCartToggle}>
                    <FaShoppingBag size="1.6rem" />
                    {cartItemsTotal > 0 && <ItemCounter>{cartItemsTotal}</ItemCounter>}
                </BasketContainer>
                <ToggleBtn onClick={() => setMenuIsOpen(prev => !prev)}>
                    <Line menuIsOpen={menuIsOpen}></Line>
                </ToggleBtn>
            </NavWrapper>
            {!isHidden && (<Cart />)}
        </HeaderContainer>
    )
}

export default Header
