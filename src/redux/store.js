import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slice/cartSlice';
import cardShow from './slice/cardShow';
import createShow from './slice/createShow';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        show: cardShow,
        create: createShow,
    },
});

export default store;
