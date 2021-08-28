import React, { Component } from 'react'
import { connect } from 'react-redux';
import CardProduct from './CardProduct';
import { addToCart } from '../actions';

class Products extends Component {
    render() {
        const { products, addToCart } = this.props
        return (
            <div className="container mt-5">
                <h3>All Products</h3>
                <p className="text-muted">All Products that available to order</p>
                <div className="row mt-3">
                    {
                        products.length > 0 ? products.map(product => (
                            <div className="col-md-3">
                                <CardProduct key={product.id} product={product} addToCart={addToCart} />
                            </div>
                        )) : <p className="text-center mx-auto">No Product Available</p>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    };
};

function mapDispatchToProps(dispatch) {
    return ({
        addToCart: (product) => dispatch(addToCart(product)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)