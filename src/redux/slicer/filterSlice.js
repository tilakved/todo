import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: { sortBy: 'all', deletePopupId: false },
    reducers: {
        updateSortBy: (state, actions) => {
            return { ...state, sortBy: actions.payload };
        },
        updateDeletePopupId: (state, actions) => {
            return { ...state, deletePopupId: actions.payload };
        }
    },
});

export default filterSlice.reducer;
export const { updateDeletePopupId, updateSortBy } = filterSlice.actions;