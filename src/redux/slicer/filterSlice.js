import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: { sortBy: 'all', deletePopupId: null, editPopupId: null, addDirectoriesPopup: false, addTaskPopup: false, searchValue: '' },
    reducers: {
        updateSortBy: (state, actions) => {
            return { ...state, sortBy: actions.payload };
        },
        updateDeletePopupId: (state, actions) => {
            return { ...state, deletePopupId: actions.payload };
        },
        updateEditPopupId: (state, actions) => {
            return { ...state, editPopupId: actions.payload };
        },
        updateAddDirectoriesPopup: (state, actions) => {
            return { ...state, addDirectoriesPopup: actions.payload };
        },
        updateAddTaskPopup: (state, actions) => {
            return { ...state, addTaskPopup: actions.payload };
        },
        updateSearchValue: (state, actions) => {
            return { ...state, searchValue: actions.payload }
        }
    },
});

export default filterSlice.reducer;
export const { updateDeletePopupId, updateSortBy, updateAddDirectoriesPopup, updateAddTaskPopup, updateEditPopupId, updateSearchValue } = filterSlice.actions;