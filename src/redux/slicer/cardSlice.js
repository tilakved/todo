import { createSlice, current } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "card",
    initialState: [{
        name: "Task-1",
        description: 'This is long description.',
        date: '22/12/23',
        completed: true,
        important: true,
        deleted: false,
    },
    {
        name: "Task-2",
        description: 'This is long long description.',
        date: '22/12/23',
        completed: false,
        important: false,
        deleted: false,
    }],
    reducers: {
        updateName: (state, actions) => {
            state[actions.payload.index].name = actions.payload.value
        },
        updateDescription: (state, actions) => {
            state[actions.payload.index].description = actions.payload.value
        },
        updateCompleted: (state, actions) => {
            state[actions.payload.index].completed = actions.payload.status
        },
        updateImportant: (state, actions) => {
            state[actions.payload.index].important = actions.payload.status
        },
        updatedeleted: (state, actions) => {
            state[actions.payload.index].deleted = actions.payload.status
        },
    },
});

export default cardSlice.reducer;
export const { updateName, updateDescription, updateCompleted, updateImportant, updatedeleted } = cardSlice.actions;