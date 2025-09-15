import { createSlice } from "@reduxjs/toolkit";

const ActiveP_Slice=createSlice({
    name:"activeProduct",
    initialState:{},
    reducers:{
        setActiveProduct:(state,action)=>{

            return state=action.payload.product;
        }
    }

})
export const {setActiveProduct}=ActiveP_Slice.actions;
export default ActiveP_Slice.reducer;