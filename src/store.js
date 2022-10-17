import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducer/product';

export const store = configureStore({
	reducer: {
		product: productReducer,
	},
});
