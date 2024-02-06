import { createSlice, current } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "card",
    initialState: [{
        id: 1,
        name: "Task-1",
        description: 'This is long description.',
        date: '12/22/23',
        completed: true,
        important: true,
        deleted: false,
    },
    {
        id: 2,
        name: "Task-2",
        description: 'This is long long description.',
        date: '02/06/24',
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
            const index = state.findIndex((res)=>actions.payload.id === res.id);
            state[index].completed = actions.payload.status
        },
        updateImportant: (state, actions) => {
            const index = state.findIndex((res)=>actions.payload.id === res.id);
            state[index].important = actions.payload.status;
        },
        updatedeleted: (state, actions) => {
            state[actions.payload.index].deleted = actions.payload.status
        },
    },
});

export default cardSlice.reducer;
export const { updateName, updateDescription, updateCompleted, updateImportant, updatedeleted } = cardSlice.actions;