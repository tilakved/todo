import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: { sortBy: 'all', deletePopupId: null, addDirectoriesPopup: false},
    reducers: {
        updateSortBy: (state, actions) => {
            return { ...state, sortBy: actions.payload };
        },
        updateDeletePopupId: (state, actions) => {
            return { ...state, deletePopupId: actions.payload };
        },
        updateAddDirectoriesPopup: (state, actions) => {
            return { ...state, addDirectoriesPopup: actions.payload };
        }
    },
});

export default filterSlice.reducer;
export const { updateDeletePopupId, updateSortBy, updateAddDirectoriesPopup } = filterSlice.actions;