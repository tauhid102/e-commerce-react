import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    console.log(props.product);
   const {name,img,price,seller,stock}=props.product;
   console.log(props.handleAddtoCart);
   const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <img src={img} alt="" srcset="" />
            <div>
                <h4>{name}</h4>
                <p><small>by {seller}</small></p>
                <h4>${price}</h4>
                <p>only {stock} left in stok - order soon</p>
                <button onClick={()=>props.handleAddtoCart(props.product)} className='btn-regular'>{element} Add to Cart</button>
            </div>
            
        </div>
    );
};

export default Product;