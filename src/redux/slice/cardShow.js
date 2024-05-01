import { createSlice } from '@reduxjs/toolkit';

export const cardShow = createSlice({
    name: 'card',
    initialState: {
        show: false,
    },
    reducers: {
        setShow: (state) => {
            state.show = true;
        },
        clearShow: (state) => {
            state.show = false;
        },
    },
});

export const { setShow, clearShow } = cardShow.actions;

export default cardShow.reducer;
