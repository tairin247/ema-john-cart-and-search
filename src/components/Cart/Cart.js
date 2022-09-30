import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h2>Oder Summary</h2>
            <p>Selected items: {cart.length}</p>
        </div>
    );
};

export default Cart;