import { createSlice } from "@reduxjs/toolkit";
import CategoryMenu from "../Components/CategoryMenu";

const CategorySlice = createSlice({
    name: 'category',
    initialState:{
        category:"All"
    },
    reducers:{
        addCategory:(state, action)=>{
            state.category = action.payload
        }
    }
})
export const {addCategory} = CategorySlice.actions
export default CategorySlice.reducer