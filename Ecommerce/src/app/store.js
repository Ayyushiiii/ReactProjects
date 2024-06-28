import { configureStore } from "@reduxjs/toolkit";
import SlideReducer from "../features/slices/sliderSlice";
import ProductReducer from "../features/slices/productSlice";
import cartReducer from '../features/slices/cartSlice';


const store  = configureStore({
    reducer : {
      slider :  SlideReducer,
      products : ProductReducer,
      cart : cartReducer,
    },
})

export default store