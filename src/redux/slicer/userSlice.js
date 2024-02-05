import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "card",
    initialState: [{
        name: "Task-1",
        description: 'This is long description.',
        date:'22/12/23',
        completed: true,
        important: true,
        deleted: false,
    },
    {
        name: "Task-2",
        description: 'This is long long description.',
        date:'22/12/23',
        completed: false,
        important: false,
        deleted: false,
    },],
    reducers: {
        updateName: (state, { payload }) => {
            return { ...state, name: payload };
        },
        updateDescription: (state, { payload }) => {
            return { ...state, description: payload };
        },
        updateCompleted: (state, { payload }) => {
            return { ...state, completed: payload };
        },
        updateImportant: (state, { payload }) => {
            return { ...state, important: payload };
        },
        updatedeleted: (state, { payload }) => {
            return { ...state, deleted: payload };
        },
    },
});

export default cardSlice.reducer;
export const { updateName, updateDescription, updateCompleted, updateImportant, updatedeleted } = cardSlice.actions;