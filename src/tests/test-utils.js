import { Provider } from 'react-redux';
import React from 'react';
import { store as reduxStore } from '../store';
import { render } from '@testing-library/react';

function renderWithProviders(
	ui,
	{ store = reduxStore, ...renderOptions } = {},
) {
	function Wrapper({ children }) {
		return <Provider store={store}>{children}</Provider>;
	}
	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export * from '@testing-library/react';
export { renderWithProviders };
