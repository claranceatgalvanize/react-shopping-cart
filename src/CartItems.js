import React from 'react';
import CartItem from './CartItem'

const cartItems = ({ cart, total }) => (
    <div className="container my-5">
        <h1>Cart Items</h1>
        <div className="list-group">
            <div className="list-group-item bg-secondary text-white">
                <div className="row">
                    <div className="col-md-8">Product</div>
                    <div className="col-md-2">Price</div>
                    <div className="col-md-2">Quantity</div>
                </div>
            </div>
            {cart.map(item => 
            <div className="list-group-item" key={ item.id }><CartItem item={ item } total={ total } /></div>)}
            <div className="list-group-item">
                <div className="row">
                    <div className="col lead ml-2">Total: <strong>${ total }</strong></div>
                </div>
            </div>
        </div>
    </div>
)

export default cartItems;