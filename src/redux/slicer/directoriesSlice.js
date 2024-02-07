import { createSlice } from "@reduxjs/toolkit";

const directoriesSlice = createSlice({
    name: "directories",
    initialState: ['Main', 'Secondary'],
    reducers: {
        updateName: (state, actions) => {
            state[actions.payload.index] = actions.payload.value
        },
        updateFullDirectory: (state, actions) => {
            state = state.push(actions.payload)
        },
        deleteDirectory: (state, actions) => {
            const index = actions.payload;
            state.splice(index,1);
        }
    },
});

export default directoriesSlice.reducer;
export const { updateName, updateFullDirectory, deleteDirectory } = directoriesSlice.actions;