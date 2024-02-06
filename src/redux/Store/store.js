import { configureStore } from "@reduxjs/toolkit";
import cardReducer from '../slicer/cardSlice';
import filterReducer from '../slicer/filterSlice';
import directoriesSlice from '../slicer/directoriesSlice';

export const store = configureStore({
    reducer: {
        card: cardReducer,
        filter:filterReducer,
        directories:directoriesSlice,
    }
})