import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import {
	cleanup,
	fireEvent,
	renderWithProviders,
	screen,
	waitFor,
} from './test-utils';

import FormComponent from '../Form';
import TableComponent from '../Table';

const RouterComponent = () => {
	return useRoutes([
		{ path: '/', element: <TableComponent /> },
		{ path: '/form', element: <FormComponent /> },
	]);
};
describe('Product', () => {
	const renderApp = () => {
		renderWithProviders(
			<Router>
				<RouterComponent />
			</Router>,
		);
	};
	const renderTable = () => {
		renderWithProviders(
			<Router>
				<TableComponent />
			</Router>,
		);
	};

	const renderForm = () => {
		renderWithProviders(
			<Router>
				<FormComponent />
			</Router>,
		);
	};

	describe('Product Table', () => {
		beforeEach(() => {
			cleanup();
		});
		it('shows search field on table', () => {
			renderApp();
			expect(screen.getByTestId('product-table-search')).toBeInTheDocument();
		});
		it('shows add product button', () => {
			renderApp();
			expect(screen.getByTestId('product-add-button')).toBeInTheDocument();
		});
		it('shows the product table', () => {
			renderApp();
			expect(screen.getByTestId('product-table')).toBeInTheDocument();
		});
		it('go to the form on clicking the add button', async () => {
			await renderApp();
			await fireEvent.click(screen.getByTestId('product-add-button'));
			await waitFor(() => {
				expect(screen.getByTestId('product-form')).toBeInTheDocument();
			});
		});
		it('shows the searched data on searching into the input', async () => {
			await renderTable();
			await fireEvent.change(screen.getByTestId('product-table-search'), {
				target: { value: '123123123' },
			});
			await waitFor(() => {
				expect(screen.queryByTestId('product-row')).toBeNull();
			});
		});
	});
	describe('Product Form', () => {
		beforeEach(() => {
			cleanup();
		});
		it('shows input field for product name', () => {
			renderForm();
			expect(screen.getByTestId('product-name-input')).toBeInTheDocument();
		});
		it('shows input field for product description', () => {
			renderForm();
			expect(
				screen.getByTestId('product-description-input'),
			).toBeInTheDocument();
		});
		it('shows input field for product price', () => {
			renderForm();
			expect(screen.getByTestId('product-price-input')).toBeInTheDocument();
		});
		it('shows add Product button', () => {
			renderForm();
			expect(screen.getByTestId('add-product-submit')).toBeInTheDocument();
		});
		it('shows back button', () => {
			renderForm();
			expect(screen.getByTestId('back-button')).toBeInTheDocument();
		});
		it('goes to main screen on clicking the back button', async () => {
			await renderApp();
			await fireEvent.click(screen.getByTestId('back-button'));
			expect(screen.getByTestId('product-table')).toBeInTheDocument();
		});
		it('leads to the table screen on clicking the submit form and taking inputs', async () => {
			await renderApp();
			await fireEvent.click(screen.getByTestId('product-add-button'));
			await fireEvent.change(screen.getByTestId('product-name-input'), {
				target: { value: 'New Name' },
			});
			await fireEvent.change(screen.getByTestId('product-description-input'), {
				target: { value: 'New Description' },
			});
			await fireEvent.change(screen.getByTestId('product-price-input'), {
				target: { value: '47' },
			});
			await fireEvent.click(screen.getByTestId('add-product-submit'));
			expect(screen.getByText('New Name')).toBeInTheDocument();
			expect(screen.getByText('New Description')).toBeInTheDocument();
			expect(screen.getByText('47')).toBeInTheDocument();
		});
	});
});
