import React from "react";
import { useSelector } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CartItem from "../../components/cartItem/CartItem";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";
import {
    OrderSummaryContainer,
    CheckoutContainer,
    CheckoutPageContainer,
    Costs,
    ItemsContainer,
    Cost,
    OrderSummary,
    Title,
    Header,
} from "./Checkout.styles";
import {
    selectCartItems,
    selectCartItemsTotal,
    selectCartTotal,
} from "../../redux/cart/cartSlice";

const publishableKey =
    "pk_test_51JYcbRFTlyQMcfNaJmHXuLPHZzPeaumXgEvzknihr4WmczeuhaoKGKt4wibiinsy916d29nv5SZGHCqJYkxSUjHA00AyHiCvxS";
const stripePromise = loadStripe(publishableKey);

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const cartItemsTotal = useSelector(selectCartItemsTotal);

    return (
        <CheckoutPageContainer>
            <Header>Let's Checkout</Header>
            <CheckoutContainer>
                <OrderSummaryContainer>
                    <Title>Order Summary</Title>
                    <OrderSummary>
                        <h3>Total Items: {cartItemsTotal}</h3>
                        <ItemsContainer>
                            {cartItems.map((cartItem) => (
                                <CartItem key={cartItem.id} item={cartItem} />
                            ))}
                        </ItemsContainer>
                        <hr />
                        <Costs>
                            <Cost>Subtotal: ${cartTotal.toFixed(2)}</Cost>
                            <Cost>Shipping: $5.00</Cost>
                            <Cost>Total: ${(cartTotal + 5).toFixed(2)}</Cost>
                        </Costs>
                    </OrderSummary>
                </OrderSummaryContainer>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </CheckoutContainer>
        </CheckoutPageContainer>
    );
};

export default Checkout;
