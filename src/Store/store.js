import { configureStore } from "@reduxjs/toolkit";
import clothingItems from "./Reducers/clothingReducer.js";
import electronicItems from "./Reducers/electronicsReducer.js";
import homeAppliances from "./Reducers/homeAppliances.js";
import filterReducer from "./Reducers/filterReducer.js";

const store=configureStore({
    reducer:{
        clothingItems,
        electronicItems,
        homeAppliances,
        filterReducer
    }
});

export default store;