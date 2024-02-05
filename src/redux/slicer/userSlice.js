import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Darshan Patel",
    age: 21,
  },
  reducers: {
    updateName: (state, { payload }) => {
      return { ...state, name: payload };
    },
    updateAge: (state, { payload }) => {
      return { ...state, age: payload };
    },
  },
});

export default userSlice.reducer;
export const { updateAge, updateName } = userSlice.actions;