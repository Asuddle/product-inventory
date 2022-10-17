import './App.scss';

import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import FormComponent from './modules/product/Form';
import TableComponent from './modules/product/Table';

const RouterComponent = () => {
	return useRoutes([
		{ path: '/', element: <TableComponent /> },
		{ path: '/form', element: <FormComponent /> },
	]);
};

function App() {
	return (
		<div className='App'>
			<h2 data-testid='product-inventory-heading'>Product Inventory</h2>
			<Router>
				<RouterComponent />
			</Router>
		</div>
	);
}

export default App;
