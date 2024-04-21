import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slice/cartSlice';
import cardShow from './slice/cardShow';


const store = configureStore({
    reducer: {
        cart: cartSlice,
        show: cardShow,
    },
});

export default store;
