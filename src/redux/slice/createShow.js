import { createSlice } from '@reduxjs/toolkit';

export const createShow = createSlice({
    name: 'show',
    initialState: {
        create: false,
    },
    reducers: {
        showCreate: (state) => {
            state.create = true;
        },
        clearCreate: (state) => {
            state.create = false;
        },
    },
});

export const { showCreate, clearCreate } = createShow.actions;

export default createShow.reducer;
