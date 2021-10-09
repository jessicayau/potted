import React from 'react';
import CheckoutItem from '../checkoutItem/CheckoutItem';
import { CheckoutTableContainer, HeaderTitle, TableHeader } from './CheckoutTable.styles';


const CheckoutTable = ({ cartItems }) => {
    return (
        <CheckoutTableContainer numCartItems={cartItems.length}>
            <thead>
                <TableHeader>
                    <HeaderTitle>Product</HeaderTitle>
                    <HeaderTitle>Quantity</HeaderTitle>
                    <HeaderTitle>Price</HeaderTitle>
                    <HeaderTitle>Remove</HeaderTitle>
                </TableHeader>
            </thead>
            <tbody>
                {cartItems.map(item => (
                        <CheckoutItem key={item.id} item={item} />
                    )
                )}
            </tbody>
        </CheckoutTableContainer>
    )
}

export default CheckoutTable;
