import React, { Component } from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CartItem from './CartItem'
import { connect } from 'react-redux';
import { removeFromCart, addItemQty, removeItemQty, addWishlist } from '../actions';

class Cart extends Component {
    render() {
        const { cartItems, removeFromCart, addItemQty, removeItemQty, addWishlist } = this.props
        return (
            <div className="row mt-5">
                <div className="col-lg-8 col-md-12">
                    <div className="custom-card">
                        <h4>Cart ( {cartItems.length} Items)</h4>
                        <hr className="my-3" />
                        {
                            cartItems.map((cartItem) => (
                                <CartItem key={cartItem.id} cartItem={cartItem} removeFromCart={removeFromCart} addItemQty={addItemQty} removeItemQty={removeItemQty} addWishlist={addWishlist} />
                            ))
                        }
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="custom-card" style={{ borderRadius: "10px" }}>
                        <h5>The Total Amount Of</h5>
                        <hr className="my-3" />
                        <div className="d-flex justify-content-between">
                            <p className="text-muted">Temporary Amount</p>
                            <p className="text-muted">${cartItems.reduce((acc, { product_price, product_qty }) => {
                                let qty = parseInt(product_qty)
                                let item = parseFloat(product_price).toFixed(2)
                                let accumulator = parseFloat(acc).toFixed(2)
                                let res = parseFloat(item) * qty + parseFloat(accumulator)
                                return parseFloat(res).toFixed(2)
                            }, 0)}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="text-muted">Shipping</p>
                            <p className="text-muted">Free</p>
                        </div>
                        <hr className="my-2" />
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <strong>Total Amount Of <br /> (including VAT)</strong>
                            <strong>${cartItems.length > 0 ? parseFloat(cartItems.reduce((acc, { product_price, product_qty }) => {
                                let qty = parseInt(product_qty)
                                let item = parseFloat(product_price).toFixed(2)
                                let accumulator = parseFloat(acc).toFixed(2)
                                let res = parseFloat(item) * qty + parseFloat(accumulator)
                                return parseFloat(res).toFixed(2)
                            }, 0)) + 2 : 0}</strong>
                        </div>
                        <button className="btn btn-primary btn-block py-2">GO TO CHECKOUT</button>
                    </div>
                    <Accordion className="mt-3 py-2">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Add a discount code (optional)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="d-flex flex-column" style={{ width: "100%" }}>
                                <input type="text" class="form-control" placeholder="Your Discount Code" />
                                <button className="btn btn-primary btn-block mt-3">SUBMIT</button>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems
    };
};

function mapDispatchToProps(dispatch) {
    return ({
        removeFromCart: (product) => dispatch(removeFromCart(product)),
        addItemQty: (product) => dispatch(addItemQty(product)),
        removeItemQty: (product) => dispatch(removeItemQty(product)),
        addWishlist: (product) => dispatch(addWishlist(product)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)