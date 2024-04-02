import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
    isAuth: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredential: (state) => {
            state.isAuth = true;
            state.apiKey;
        },

        clearCredentials: (state) => {
            state.isAuth = false;
        },
    },
});

export const { setCredential, logout } = authSlice.actions;
export default authSlice.reducer;
