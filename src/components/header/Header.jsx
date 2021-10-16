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
            document.body.style.paddingRight = "15px";
        } else {
            document.body.style.overflowY = "auto";
            document.body.style.paddingRight = "0";
        }
    }, [menuIsOpen, isHidden]);

    console.log(menuIsOpen);

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
                <BasketContainer role="button" onClick={handleCartToggle}>
                    <FaShoppingBag title="cart" size="1.6rem" />
                    {cartItemsTotal > 0 && (
                        <ItemCounter>{cartItemsTotal}</ItemCounter>
                    )}
                </BasketContainer>
                <ToggleBtn
                    role="button"
                    onClick={() => setMenuIsOpen((prev) => !prev)}
                >
                    <Line menuIsOpen={menuIsOpen}></Line>
                </ToggleBtn>
            </NavWrapper>
            {!isHidden && <Cart />}
        </HeaderContainer>
    );
};

export default Header;
