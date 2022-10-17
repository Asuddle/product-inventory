import { productData } from './data';

// set product data to localStorage
const setData = (data) => {
	localStorage.setItem('productData', JSON.stringify(data));
};

// get product data from localStorage
const getData = () => {
	if (localStorage.getItem('productData')) {
		return JSON.parse(localStorage.getItem('productData'));
	} else {
		localStorage.setItem('productData', JSON.stringify(productData));
		return productData;
	}
};

export { setData, getData };
