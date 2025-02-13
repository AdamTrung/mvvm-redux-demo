import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id : 0,
}

const idSlice = createSlice({
    name: "id",
    initialState,
    reducers: {
        updateId: (state) => {
            id: state.id += 1;
        }
    }
})

export const { updateId } = idSlice.actions;

export default idSlice.reducer;