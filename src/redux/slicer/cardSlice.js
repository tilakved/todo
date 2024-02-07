import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "card",
    initialState: [{
        id: 1,
        directory: 'Main',
        name: "Task-1",
        description: 'This is long description.',
        date: '2023-12-20',
        completed: true,
        important: true,
        deleted: false,
    },
    {
        id: 2,
        directory: 'Main',
        name: "Task-2",
        description: 'This is long long description.',
        date: '2024-02-06',
        completed: false,
        important: false,
        deleted: false,
    },
    {
        id: 3,
        directory: 'Secondary',
        name: "Task-3",
        description: 'This is long long description.',
        date: '2024-02-07',
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
            const index = state.findIndex((res) => actions.payload.id === res.id);
            state[index].completed = actions.payload.status
        },
        updateImportant: (state, actions) => {
            const index = state.findIndex((res) => actions.payload.id === res.id);
            state[index].important = actions.payload.status;
        },
        updateDeleted: (state, actions) => {
            let index = state.findIndex((res) => actions.payload.id === res.id);
            state[index].deleted = actions.payload.status;
        },
        addFullCard: (state, actions)=>{
           state.push(actions.payload)
        },
        updateFullCard: (state, actions)=>{
            console.log(actions);
            let index = state.findIndex((res) => actions.payload.id === res.id);
            state.splice(index,1,actions.payload.value)
        }
    },
});

export default cardSlice.reducer;
export const { updateName, updateDescription, updateCompleted, updateImportant, updateDeleted, addFullCard, updateFullCard } = cardSlice.actions;