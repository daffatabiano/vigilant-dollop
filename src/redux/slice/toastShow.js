import { createSlice } from '@reduxjs/toolkit';

export const toastSlice = createSlice({
    name: 'toast',
    initialState: {
        show: false,
    },
    reducers: {
        setToast: (state, action) => {
            state.show = true;
        },
        clearToast: (state) => {
            state.show = false;
        },
    },
});

export const { setToast, clearToast } = toastSlice.actions;

export default toastSlice.reducer;
