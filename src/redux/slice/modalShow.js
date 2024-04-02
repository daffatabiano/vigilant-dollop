import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: false,
};

const modalShow = createSlice({
    name: 'modalShow',
    initialState,
    reducers: {
        showModal: (state) => {
            state.show = true;
        },
        hideModal: (state) => {
            state.show = false;
        },
    },
});

export const { showModal, hideModal } = modalShow.actions;
export default modalShow.reducer;
