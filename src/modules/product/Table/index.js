import {
	Button,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { searchProduct } from '../../../reducer/product';
import styles from '../style/product.module.scss';
import { useNavigate } from 'react-router-dom';

function TableComponent() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const data = useSelector((item) => item.product.data);
	const handleClick = () => {
		navigate('/form');
	};
	const handleSearch = (e) => {
		dispatch(searchProduct(e.target.value));
	};
	return (
		<TableContainer className={styles.productTable}>
			<TextField
				size='small'
				onChange={handleSearch}
				// data-testid='product-table-search'
				inputProps={{
					'data-testid': 'product-table-search',
				}}
				className={styles.searchInput}
				placeholder='Search'
			/>
			{'  '}
			<Button
				variant='contained'
				data-testid='product-add-button'
				className={styles.addButton}
				onClick={handleClick}
			>
				Add Product
			</Button>

			<Table className={styles.table} data-testid='product-table'>
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>Description</TableCell>
						<TableCell>Price ($)</TableCell>
						<TableCell>Created Date</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((item) => (
						<TableRow key={item.name} data-testid='product-row'>
							<TableCell width='20%'>{item.name}</TableCell>
							<TableCell width='50%'>{item.description}</TableCell>
							<TableCell width='10%'>{item.price}</TableCell>
							<TableCell width='20%'>{item.createdDate}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default TableComponent;
