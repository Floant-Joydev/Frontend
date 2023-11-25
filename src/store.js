import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/authSlice'
import productReducer from './features/product/ProductSlice'
import blogReducer from './features/blog/BlogSlice'
import cartReducer from './features/cart/CartSlice.js'
import orderReducer from './features/Order/OrderSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
        blog: blogReducer,
        cart: cartReducer,
        order: orderReducer,
    },
})