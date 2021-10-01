import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CartItem from '../cartItem/CartItem';
// import { selectCartItems } from '../../redux/cart/cart.selectors';
// import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import { CartDropdownContainer, CartDropdownButton, EmptyMessageContainer, CartItemsContainer, CloseCartBtn } from './Cart.styles';

const Cart = () => {
//   const dispatch = useDispatch();
  const history = useHistory();
//   const cartItems = useSelector(selectCartItems);
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


  return (
      <CartDropdownContainer>
          <CloseCartBtn />
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          history.push('/checkout');
        //   dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default Cart;