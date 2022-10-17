import { renderWithProviders, screen } from './test-utils';

import App from '../../../App';

describe('App', () => {
	it('shows the Product Inventory title', () => {
		renderWithProviders(<App />);
		expect(screen.getByTestId('product-inventory-heading')).toBeInTheDocument();
	});
});
