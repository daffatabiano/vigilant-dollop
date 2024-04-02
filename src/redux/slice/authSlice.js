import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
    isAuth: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredential: (state, action) => {
            state.isAuth = action.payload;
            state.apiKey = '24405e01-fbc1-45a5-9f5a-be13afcd757c';
        },

        clearCredentials: (state) => {
            state.isAuth = false;
            state.apiKey = '24405e01-fbc1-45a5-9f5a-be13afcd757c';
        },
    },
});

export const { sertCredential, logout } = authSlice.actions;
export default authSlice.reducer;
