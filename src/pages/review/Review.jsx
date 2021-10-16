import React from "react";
import { useSelector } from "react-redux";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import CheckoutTable from "../../components/checkoutTable/CheckoutTable";
import {
    selectCartItems,
    selectCartItemsTotal,
    selectCartTotal,
} from "../../redux/cart/cartSlice";
import {
    Buttons,
    CheckoutTotal,
    EmptyCartMessage,
    ReviewContainer,
} from "./Review.styles";
import { useHistory } from "react-router";
import Btn from "../../components/btn/Btn";

const Review = () => {
    const history = useHistory();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const cartItemsTotal = useSelector(selectCartItemsTotal);

    return (
        <ReviewContainer>
            <h1>Review Your Cart</h1>
            {cartItemsTotal < 1 ? (
                <EmptyCartMessage>
                    Your cart is currently empty
                </EmptyCartMessage>
            ) : (
                <CheckoutTable cartItems={cartItems} />
            )}
            {cartItemsTotal > 0 && (
                <CheckoutTotal>TOTAL: ${cartTotal.toFixed(2)}</CheckoutTotal>
            )}
            <Buttons>
                <Btn
                    secondaryBtn
                    className="button"
                    onClick={() => history.push("/shop")}
                >
                    <BsArrowLeft />
                    Keep Shopping
                </Btn>
                {cartItemsTotal > 0 && (
                    <Btn
                        secondaryBtn
                        className="button"
                        onClick={() => history.push("/checkout")}
                    >
                        Checkout
                        <BsArrowRight />
                    </Btn>
                )}
            </Buttons>
        </ReviewContainer>
    );
};

export default Review;
