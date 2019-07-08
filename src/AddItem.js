import React from 'react'

const AddItem = ({ products, newItem}) => (
    <div className="container my-5">
        <h1>Add Items</h1>
        <form onSubmit={ newItem }>
            <div className="form-group">
                <label htmlFor="quantity">Quantity</label>
                <input type="number" className="form-control" name="quantity" min="1" placeholder="Enter amount" required></input>
            </div>
            <div className="form-group">
                <label htmlFor="products">Products</label>
                <select className="form-control" name="products" required>
                <option defaultValue>Select an option</option>
                { products.map( product => <option key={ product.id }>{product.name}</option> ) }
                </select>
            </div>        
            <div className="form-group">
                <input type="submit" value="Add to cart" className="btn btn-dark" />
            </div>
        </form>
    </div>
)

export default AddItem;
