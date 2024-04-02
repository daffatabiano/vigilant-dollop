import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slice/cartSlice';
import modalShow from './slice/modalShow';
import authSlice from './slice/authSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        modalShow: modalShow,
        auth: authSlice,
    },
});

export default store;
