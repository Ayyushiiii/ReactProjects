import { createSlice } from "@reduxjs/toolkit";
import { sliderData } from "../../assets/data/DummyData";

export const sliderSlice = createSlice({
    name:"slider",
    initialState:{
        value : 0,
        length :sliderData.length-1,
    },
    reducers:{
        nextSlide(state, action) {
            state.value = action.payload > state.length? 0: action.payload
        },
        previousSlide(state, action) {
            state.value = action.payload<0 ? state.length-1 : action.payload
        },
        dotSlide(state, action) {
            state.value =action.payload
            
        }

    }
})

export const {nextSlide,previousSlide,dotSlide} = sliderSlice.actions
export default sliderSlice.reducer;