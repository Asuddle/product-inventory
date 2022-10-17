import { getData, setData } from '../helper';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: getData(),
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			let prodData = [...state.data, ...[action.payload]];
			setData(prodData);
			state.data = prodData;
		},
		searchProduct: (state, action) => {
			let filteredData = getData().filter(
				(item) =>
					item.name.toLowerCase().includes(action.payload.toLowerCase()) ||
					item.description
						.toLowerCase()
						.includes(action.payload.toLowerCase()) ||
					item.price.toLowerCase().includes(action.payload.toLowerCase()),
			);
			state.data = filteredData;
		},
	},
});

export const { addProduct, searchProduct } = productSlice.actions;

export default productSlice.reducer;
