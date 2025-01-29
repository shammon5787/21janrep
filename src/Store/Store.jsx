import { configureStore } from "@reduxjs/toolkit";
import CardReducer from './CardSlice.jsx'
import CategoryReducer from './CategorySlice.jsx'

const Store = configureStore({
    reducer:{
        cart: CardReducer ,
        category: CategoryReducer ,
    }
})

export default Store