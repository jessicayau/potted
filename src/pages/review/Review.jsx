import React from 'react';
import { useSelector } from 'react-redux';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import CheckoutTable from '../../components/checkoutTable/CheckoutTable';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSlice';
import { Buttons, CheckoutTotal, ReviewContainer } from './Review.styles';
import { useHistory } from 'react-router';
import Btn from '../../components/btn/Btn';


const Review = () => {
    const history = useHistory();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    

    return (
        <ReviewContainer>
            <h1>Review Your Order</h1>
            <CheckoutTable cartItems={cartItems} />
            <CheckoutTotal>TOTAL: ${cartTotal.toFixed(2)}</CheckoutTotal>
            <Buttons>
                <Btn className="button" onClick={() => history.push('/shop')}>
                    <BsArrowLeft />
                    Keep Shopping
                </Btn>
            {cartItems.length > 0 && (
                <Btn className="button" onClick={() => history.push('/checkout')}>
                    Checkout
                    <BsArrowRight />
                </Btn>
            )}    
            </Buttons>
            
            
        </ReviewContainer>
    )
}


export default Review;
