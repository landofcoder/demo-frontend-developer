import React from "react";

function Product(props) {
    return (
        <div>
            <h1>Product name: {props.product.name}</h1>
            <h1>Product price: {props.product.price} $</h1>
            <h1>Product status: {props.product.status}</h1>
        </div>
    )
}
export default Product