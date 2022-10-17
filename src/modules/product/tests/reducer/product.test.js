import reducer, {
	addProduct,
	searchProduct,
} from '../../../../reducer/product';

import { productData } from '../../../../data';

describe('Redux Actions Testing', () => {
	const undef = undefined;
	describe('Product Actions', () => {
		it('return initial State', () => {
			expect(reducer(undef, [])).toEqual({
				data: productData,
			});
		});

		it('return state after setAccountData function', () => {
			expect(
				reducer(
					undef,
					addProduct({
						name: 'abc',
						description: 'def',
						price: '1',
						createdDate: 'Mon Oct 17 2022',
					}),
				),
			).toEqual({
				data: [
					...productData,
					...[
						{
							name: 'abc',
							description: 'def',
							price: '1',
							createdDate: 'Mon Oct 17 2022',
						},
					],
				],
			});
		});
		it('return state after searchProduct', () => {
			reducer(
				undef,
				addProduct({
					name: 'abc',
					description: 'def',
					price: '1',
					createdDate: 'Mon Oct 17 2022',
				}),
			);

			expect(reducer(undef, searchProduct('ihi'))).toEqual({
				data: [],
			});
		});
	});
});
