import {actionTypes} from '../types'
import products from '../product.json'

const initProducts = [...products]
const initialState = {
    products: initProducts,
    cartItems: [],
    wishlists: []
};
  
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.addToCart:
        let filProduct = state.products.filter(item => item.id !== action.payload.id)
        let filWishlist2 = state.wishlists.filter(item => item.id !== action.payload.id)
        return {
          ...state, 
          cartItems: [...state.cartItems, action.payload],
          products: filProduct,
          wishlists: filWishlist2
        };
  
      case actionTypes.removeFromCart:
        let filData = state.cartItems.filter(item => item.id !== action.payload.id)
        action.payload.product_qty = 1
        return {
            ...state, 
            cartItems: filData, 
            products: [...state.products, action.payload]
        }

      case actionTypes.addItemQty:
        let addItem = []
        state.cartItems.map(item => {
            if(item.id === action.payload.id){
                item.product_qty += 1
            }
            return addItem.push(item)
        })
        return {
            ...state, 
            cartItems: addItem, 
        }

      case actionTypes.removeItemQty:
        let removeItem = []
        state.cartItems.map(item => {
            if(item.id === action.payload.id){
                item.product_qty -= 1
            }
            return removeItem.push(item)
        })
        return {
            ...state, 
            cartItems: removeItem, 
        }

      case actionTypes.addWishlist:
        let filWishlist = state.cartItems.filter(item => item.id !== action.payload.id)
        action.payload.product_qty = 1
        return {
            ...state, 
            cartItems: filWishlist, 
            wishlists: [...state.wishlists, action.payload]
        }

      default:
        return state;
    }
}

export default cartReducer;