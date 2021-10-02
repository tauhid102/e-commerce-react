import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const {cart}=props;
    let total = 0;
    for(const product of cart){
        total+=product.price;
    }
    return (
        <div>
             <h1>Order Summary</h1>
             <h4>Items Orders: {props.cart.length}</h4>
             <p>Total: {total}</p>
        </div>
    );
};

export default Cart;