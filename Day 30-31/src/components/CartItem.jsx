import React from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';

const CartItem = ({ cartItem, removeFromCart, addItemQty, removeItemQty, addWishlist }) => {
    return (
        <>
            <div className="row mt-3 no-gutters">
                <div className="col-md-3">
                    <img className="rounded" style={{ maxWidth: "100%", maxHeight: "200px" }} src={cartItem.product_image} alt="" />
                </div>
                <div className="col-md-6">
                    <div className="mt-3">
                        <h5 className="font-weight-bold">{cartItem.product_name}</h5>
                        <p className="text-muted">{cartItem.product_desc}</p>
                        <p className="text-muted mt-3">COLOR: {cartItem.product_color}</p>
                        <p className="text-muted mt-n3">SIZE: {cartItem.product_size}</p>
                        <div className="mt-3">
                            <Button
                                variant="text"
                                style={{ color: "grey" }}
                                startIcon={<DeleteIcon />}
                                onClick={() => removeFromCart(cartItem)}
                            >
                                REMOVE ITEM
                            </Button>
                            <Button
                                className="ml-2"
                                variant="text"
                                style={{ color: "grey" }}
                                startIcon={<FavoriteIcon />}
                                onClick={() => addWishlist(cartItem)}
                            >
                                MOVE TO WISHLIST
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="input-group mt-3 mb-5">
                        <div class="input-group-prepend">
                            <button class="btn btn-outline-secondary font-weight-bold" disabled={cartItem.product_qty === 1} onClick={() => removeItemQty(cartItem)}> -- </button>
                        </div>
                        <input type="text" readOnly class="form-control text-center" value={cartItem.product_qty} aria-label="Example text with button addon" aria-describedby="button-addon1" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary font-weight-bold" onClick={() => addItemQty(cartItem)}>+</button>
                        </div>
                    </div>
                    <h5 className="text-muted font-weight-bold mt-3 float-right">${cartItem.product_price}</h5>
                </div>
            </div>
        </>
    )
}

export default CartItem