import React, { Component } from 'react'
import { connect } from 'react-redux';
import CardWishlist from './CardWishlist';
import { addToCart } from '../actions';

class Wishlist extends Component {
    render() {
        const { wishlists, addToCart } = this.props
        return (
            <div className="container mt-5">
                <h3>Wishlists</h3>
                <p className="text-muted">All Your Favorite Products</p>
                <div className="row mt-3">
                    {
                        wishlists.length > 0 ? wishlists.map(wishlist => (
                            <div className="col-md-3">
                                <CardWishlist key={wishlist.id} wishlist={wishlist} addToCart={addToCart} />
                            </div>
                        )) : <p className="text-center mx-auto">Your wishlist is empty</p>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        wishlists: state.wishlists
    };
};

function mapDispatchToProps(dispatch) {
    return ({
        addToCart: (product) => dispatch(addToCart(product)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist)