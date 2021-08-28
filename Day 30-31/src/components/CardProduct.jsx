import React from 'react'

const CardProduct = ({ product, addToCart }) => {
    return (
        <div className="custom-card card">
            <img src={product.product_image} class="card-img-top" style={{ maxHeight: "200px" }} alt="..." />
            <div class="card-body">
                <h5 class="card-title">{product.product_name}</h5>
                <p class="card-text">{product.product_desc}</p>
                <strong className="text-muted mt-2">${product.product_price}</strong>
                <button onClick={() => addToCart(product)} class="btn btn-primary btn-block mt-3">Add To Cart</button>
            </div>
        </div>
    )
}

export default CardProduct