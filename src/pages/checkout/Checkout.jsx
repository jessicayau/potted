import React from 'react';
// import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkoutItem/CheckoutItem';
// import StripeButton from '../../components/StripeButton/StripeButton';
// import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors';
import { CheckoutPage, CheckoutTable, CheckoutTotal, HeaderTitle, TableHeader, TestMessage } from './Checkout.styles';


const Checkout = () => {
    // const cartItems = useSelector(selectCartItems);
    // const cartTotal = useSelector(selectCartTotal);

    const cartItems = [{
        id: 7,
        name: "Rubber Plant",
        linkUrl: "rubber-plant",
        imageUrl: "/images/rubber-plant.png",
        price: 18,
        quantity: 2
    },
    {
        id: 8,
        name: "Hanging Marble Pothos",
        linkUrl: "hanging-marble-pothos",
        imageUrl: "/images/hanging-marble-pothos.png",
        price: 14,
        quantity: 1
    },
    {
        id: 15,
        name: "Snake Plant",
        linkUrl: "snake-plant",
        imageUrl: "/images/snake-plant.png",
        price: 16,
        quantity: 4
    },]
    const cartTotal = 100

    return (
        <CheckoutPage>
            <h1>Let's Checkout</h1>
            <CheckoutTable numCartItems={cartItems.length}>
                    <thead>
                        <TableHeader>
                            <HeaderTitle>Product</HeaderTitle>
                            <HeaderTitle>Quantity</HeaderTitle>
                            <HeaderTitle>Price</HeaderTitle>
                            <HeaderTitle>Remove</HeaderTitle>
                        </TableHeader>
                    </thead>
                    <tbody>
                        {cartItems.map(item => {
                            return (
                                <CheckoutItem key={item.id} item={item} />
                            )
                        })
                        }
                    </tbody>
            </CheckoutTable>
            <CheckoutTotal>
                <span>TOTAL: ${cartTotal.toFixed(2)}</span>
            </CheckoutTotal>
            {/* <TestMessage>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 04/24 - CVV: 242
            </TestMessage> */}
            {/* <StripeButton price={cartTotal} /> */}
        </CheckoutPage>
    )
}


export default Checkout;
