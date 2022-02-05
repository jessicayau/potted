import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../navbar/Navbar";
import Cart from "../cart/Cart";
import { FaShoppingBag } from "react-icons/fa";
import {
    BasketContainer,
    Brand,
    HeaderContainer,
    ItemCounter,
    Line,
    LogoContainer,
    NavWrapper,
    PlantLogo,
    StyledLink,
    ToggleBtn,
} from "./Header.styles";
import {
    selectCartHidden,
    selectCartItemsTotal,
    toggleCartHidden,
} from "../../redux/cart/cartSlice";

const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const isHidden = useSelector(selectCartHidden);
    const cartItemsTotal = useSelector(selectCartItemsTotal);
    const dispatch = useDispatch();

    const handleCartToggle = () => {
        dispatch(toggleCartHidden());
    };

    useEffect(() => {
        if (menuIsOpen || !isHidden) {
            document.body.style.overflowY = "hidden";
            // document.body.style.position = "fixed";
        } else {
            document.body.style.overflowY = "auto";
            // document.body.style.position = "initial";
        }
    }, [menuIsOpen, isHidden]);

    return (
        <HeaderContainer menuIsOpen={menuIsOpen}>
            <LogoContainer>
                <StyledLink href="/">
                    <PlantLogo />
                    <Brand>Potted</Brand>
                </StyledLink>
            </LogoContainer>
            <NavWrapper>
                <Navbar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
                <BasketContainer onClick={handleCartToggle}>
                    <FaShoppingBag title="cart" size="1.6rem" />
                    {cartItemsTotal > 0 && (
                        <ItemCounter>{cartItemsTotal}</ItemCounter>
                    )}
                </BasketContainer>
                <ToggleBtn onClick={() => setMenuIsOpen((prev) => !prev)}>
                    <Line menuIsOpen={menuIsOpen}></Line>
                </ToggleBtn>
            </NavWrapper>
            {!isHidden && <Cart />}
        </HeaderContainer>
    );
};

export default Header;
