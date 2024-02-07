import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: { sortBy: 'all', deletePopupId: null, addDirectoriesPopup: false, addTaskPopup: false },
    reducers: {
        updateSortBy: (state, actions) => {
            return { ...state, sortBy: actions.payload };
        },
        updateDeletePopupId: (state, actions) => {
            return { ...state, deletePopupId: actions.payload };
        },
        updateAddDirectoriesPopup: (state, actions) => {
            return { ...state, addDirectoriesPopup: actions.payload };
        },
        updateAddTaskPopup: (state, actions) => {
            return { ...state, addTaskPopup: actions.payload };
        }
    },
});

export default filterSlice.reducer;
export const { updateDeletePopupId, updateSortBy, updateAddDirectoriesPopup, updateAddTaskPopup } = filterSlice.actions;