import { configureStore } from "@reduxjs/toolkit";
import clothingItems from "./Reducers/clothingReducer.js";
import electronicItems from "./Reducers/electronicsReducer.js";
import homeAppliances from "./Reducers/homeAppliances.js";

const store=configureStore({
    reducer:{
        clothingItems,
        electronicItems,
        homeAppliances,
    }
});

export default store;