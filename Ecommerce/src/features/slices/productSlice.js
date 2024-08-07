import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/DummyData";

const ProductSlice = createSlice({
    name:"product",
    initialState : {
        filteredProducts:JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
        singleProduct:JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
        error: false,
    },
    reducers:{
        filterProducts(state, action){
            try {
                const filter = storeData.filter((product)=>
                    product.type==action.payload
                )
                state.filteredProducts= filter;
                state.error = false
                const saveState = JSON.stringify(filter)
                sessionStorage.setItem("filteredData", saveState)
                
            } catch (error) {
                return error;
            }
        },
    

        singleProduct(state, action){
            try {
                const oneProduct = storeData.filter((product)=>
                product.id === action.payload);
                state.singleProduct = oneProduct;
                const saveState = JSON.stringify(oneProduct);
                sessionStorage.setItem("oneProduct", saveState);
                console.log(oneProduct,"oneProduct");
            } catch (error) {
                return error;
            }
        },

        filterGender(state, action){
            try {
                const gender = state.filteredProducts.filter(
                    (product)=>product.gender === action.payload
                );
                state.error = false;
                state.filteredProducts = gender;

                const oneGenderType = gender.length>0;
                if(oneGenderType){
                    state.error = false;
                    const saveState = JSON.stringify(gender);
                    sessionStorage.set("filteredData" , saveState);
                }
                else{
                    state.error = true;
                    state.filteredProducts =[]
                }
            } catch (error) {
                return error;
            }
        },
        sortByPrice(state){
            const price = state.filteredProducts.sort(
                (a,b) => a.price > b.price? -1:1
            )
            state.filteredProducts = price;
            let count = price.length;
            if(count>1){
                const noError = false;
                state.error = noError;
                if(!noError){
                    state.filteredProducts = price;
                    const saveState = JSON.stringify(price)
                      sessionStorage.setItem("filteredData", saveState);
                }
             else{
                    state.error = true;
                    state.filteredProducts =[]
                }
            }
        },
        filterByColor(state, action){
            try {
                const color = state.filteredProducts.filter(
                    (product)=>product.color.includes(action.payload)
                );
                state.error = false;
                state.filteredProducts = color;
                if(color.length <=0){
                    state.error= true;
                    state.filteredProducts= []
                }
                else{
                    state.error = false;
                    const saveState = JSON.stringify(color);
                    sessionStorage.setItem("filteredData" , saveState)
                }
            } catch (error) {
                return error;

            }
        },
        filterBySizes(state, action){
            try {
                const size = state.filteredProducts.filter(
                    (product)=>product.size.includes(action.payload)
                );
                state.error = false;
                state.filteredProducts = size;
                if(size.length <=0){
                    state.error= true;
                    state.filteredProducts= []
                }
                else{
                    state.error = false;
                    const saveState = JSON.stringify(size);
                    sessionStorage.setItem("filteredData" , saveState)
                }
            } catch (error) {
                return error;

            }
        },
        
    }

})

export const{
    filterProducts, 
    singleProduct, 
    filterGender, 
    sortByPrice,
    filterByColor,
    filterBySizes
} = ProductSlice.actions;

export default ProductSlice.reducer