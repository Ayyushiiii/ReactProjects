import { configureStore } from "@reduxjs/toolkit";
import SlideReducer from "../features/slices/sliderSlice";
import ProductReducer from "../features/slices/productSlice";
import cartReducer from '../features/slices/cartSlice';
import authReducer from '../features/slices/authSlice'

const store  = configureStore({
    reducer : {
      slider :  SlideReducer,
      products : ProductReducer,
      cart : cartReducer,
      user : authReducer
    },
})

export default store