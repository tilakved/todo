import { configureStore } from "@reduxjs/toolkit";
import cardReducer from '../slicer/userSlice';

export const store = configureStore({
    reducer: {
        card: cardReducer
    }
})