// To add the elements in the cart
import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name : "cart",
    initialState : {
        cart:[],
        amount:0,
        totalAmount:0,
        totalPrice:0,
        },
    reducers:{
        addToCart(state, action){
            const productId = action.payload;
            try {
                const exist = state.cart.find((product)=>
                    product.id === productId.id &&
                    product.size === productId.size &&
                    product.color === productId.color
                )
                if(exist){
                    exist.amount++;
                    exist.totalPrice += productId.price;
                    state.totalAmount++;
                    state.totalPrice +=  productId.price;
                }
                else{
                    state.cart.push({
                        id: productId.id,
                        size:productId.size,
                        price : productId.price,
                        img : productId.img,
                        text : productId.text,
                        color: productId.color,
                        totalPrice: productId.price,
                        amount :1,
                        name : productId.name
                    }
                    );
                    state.totalAmount++;
                    state.totalPrice += productId.price
                }
            } catch (error) {
                return error 
            }
        },
        removeFromTheCart(state, action){
            const productId = action.payload
            try {
                 const exist = state.cart.find((product)=>
                    product.id === productId.id &&
                    product.size === productId.size &&
                    product.color === productId.color
                )
                if(exist.amount===1){
                    state.cart = state.cart.filter((product)=>
                    product.id !== productId.id ||
                    product.size !== productId.size ||
                    product.color !== productId.color
                )
                    state.totalAmount--;
                    state.totalPrice -= productId.price

                }
                else{
                    exist.amount--;
                    exist.totalPrice-= productId.price;
                    state.totalAmount--;
                    state.totalPrice -=productId.price
                }
            } catch (error) {
                return error;
            }
        }
    }
});



export const {addToCart, removeFromTheCart}  = cartSlice.actions;
export default cartSlice.reducer;