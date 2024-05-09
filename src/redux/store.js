import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slice/cartSlice';
import cardShow from './slice/cardShow';
import createShow from './slice/createShow';
import logoutShow from './slice/logout';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        show: cardShow,
        create: createShow,
        logout: logoutShow,
    },
});

export default store;
