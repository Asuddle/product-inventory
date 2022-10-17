import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { addProduct } from '../../../reducer/product';
import styles from '../style/product.module.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const formArr = [
	{
		size: 'small',
		name: 'name',
		label: 'Name',
		inputProps: { 'data-testid': 'product-name-input' },
	},
	{
		label: 'Description',
		name: 'description',
		multiline: true,
		inputProps: { 'data-testid': 'product-description-input' },
		rows: 4,
	},
	{
		size: 'small',
		label: 'Price',
		name: 'price',
		inputProps: { 'data-testid': 'product-price-input' },
	},
];

function FormComponent() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [form, setForm] = useState({
		name: '',
		description: '',
		price: '',
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setForm({ ...form, [name]: value });
	};

	const handleBack = () => {
		navigate('/');
	};
	const handleSubmit = () => {
		const { name, description, price } = form;
		if (name !== '' && description !== '' && price !== '') {
			dispatch(
				addProduct({ ...form, ...{ createdDate: new Date().toDateString() } }),
			);
			navigate('/');
		}
	};

	return (
		<div className={styles.productForm} data-testid='product-form'>
			{formArr.map((item) => (
				<TextField
					key={item.name}
					{...item}
					fullWidth
					value={form[item.name]}
					className={styles.inputFields}
					onChange={handleChange}
					variant='outlined'
				/>
			))}

			<Button
				className={styles.submitButton}
				onClick={handleBack}
				variant='contained'
				data-testid='back-button'
				color='secondary'
			>
				Back to Table
			</Button>
			<Button
				data-testid='add-product-submit'
				className={styles.submitButton}
				onClick={handleSubmit}
				variant='contained'
			>
				Add Product
			</Button>
		</div>
	);
}

export default FormComponent;
