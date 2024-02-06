import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    
    
    initialState: {sortBy:'all'},
    reducers: {
        updateSortBy: (state,  actions ) => {
            return {...state, sortBy:actions.payload};
        }
    },
});

export default filterSlice.reducer;
export const { updateSortBy } = filterSlice.actions;