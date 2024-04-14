import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slice/cartSlice';
import toastShow from './slice/toastShow';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        toast: toastShow,
    },
});

export default store;
