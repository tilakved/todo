import { createSlice } from "@reduxjs/toolkit";

const directoriesSlice = createSlice({
    name: "directories",
    initialState: ['Main', 'Secondary'],
    reducers: {
        updateName: (state, actions) => {
            state[actions.payload.index] = actions.payload.value
        }
    },
});

export default directoriesSlice.reducer;
export const { updateName } = directoriesSlice.actions;