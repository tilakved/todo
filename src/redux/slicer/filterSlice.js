import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {sortBy:'all'},
    reducers: {
        updateSortBy: (state,  actions ) => {
            return {...state, sortBy:actions.payload};
        }
    },
});

export default filterSlice.reducer;
export const { updateSortBy } = filterSlice.actions;