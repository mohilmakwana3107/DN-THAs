import React from 'react'

const CardWishlist = ({ wishlist, addToCart }) => {
    return (
        <div className="custom-card card">
            <img src={wishlist.product_image} class="card-img-top" style={{ maxHeight: "200px" }} alt="..." />
            <div class="card-body">
                <h5 class="card-title">{wishlist.product_name}</h5>
                <p class="card-text">{wishlist.product_desc}</p>
                <strong className="text-muted mt-2">${wishlist.product_price}</strong>
                <button onClick={() => addToCart(wishlist)} class="btn btn-primary btn-block mt-3">Add To Cart</button>
            </div>
        </div>
    )
}

export default CardWishlist