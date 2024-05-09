import { createSlice } from '@reduxjs/toolkit';

export const logoutShow = createSlice({
    name: 'logout',
    initialState: {
        logout: false,
    },
    reducers: {
        showLogout: (state) => {
            state.logout = true;
        },
        clearLogout: (state) => {
            state.logout = false;
        },
    },
});

export const { showLogout, clearLogout } = logoutShow.actions;
export default logoutShow.reducer;
