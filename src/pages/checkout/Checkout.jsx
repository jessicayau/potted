import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CheckoutItem from '../../components/checkoutItem/CheckoutItem';
// import StripeButton from '../../components/StripeButton/StripeButton';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSlice';
import { CheckoutPage, CheckoutTable, CheckoutTotal, HeaderTitle, TableHeader, TestMessage } from './Checkout.styles';


const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    

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
            <CheckoutTotal>TOTAL: ${cartTotal.toFixed(2)}</CheckoutTotal>
            <TestMessage>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 04/24 - CVV: 242
            </TestMessage>
            {/* <StripeButton price={cartTotal} /> */}
        </CheckoutPage>
    )
}


export default Checkout;
