import { configureStore } from "@reduxjs/toolkit";
import cardReducer from '../slicer/cardSlice';
import filterReducer from '../slicer/filterSlice';

export const store = configureStore({
    reducer: {
        card: cardReducer,
        filter:filterReducer
    }
})