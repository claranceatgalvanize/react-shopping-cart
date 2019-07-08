import React from "react";

const cartItem = ({ item,  total }) => (
    <div className="container">
        <div className="collection-item">
            <div className="row">
                <div className="col-md-8">{ item.product.name }</div>
                <div className="col-md-2">${ item.product.priceInCents / 100 }</div>
                <div className="col-md-2">{ item.quantity }</div>
            </div>
        </div>        
    </div>
)

export default cartItem;