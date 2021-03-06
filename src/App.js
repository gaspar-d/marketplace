import React, { useState } from "react";
import Filters from "./components/Filters/Filters";
import Products from "./components/Products/Products";
import ShoppingCart from "./components/Shoppingcart/ShoppingCart";

import styled from "styled-components";

const AppContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr 1fr;
	padding: 16px;
	gap: 8px;
`;

const products = [
	{
		id: 1,
		name: "Produto 1",
		price: 100,
		photo: "https://picsum.photos/200/200?a=1",
	},
	{
		id: 2,
		name: "Produto 2",
		price: 200,
		photo: "https://picsum.photos/200/200?a=2",
	},
	{
		id: 3,
		name: "Produto 3",
		price: 30,
		photo: "https://picsum.photos/200/200?a=3",
	},
	{
		id: 4,
		name: "Produto 4",
		price: 450,
		photo: "https://picsum.photos/200/200?a=4",
	},
	{
		id: 5,
		name: "Produto 5",
		price: 123,
		photo: "https://picsum.photos/200/200?a=5",
	},
];

function App() {
	const [minFilter, setMinFilter] = useState(0);
	const [maxFilter, setMaxFilter] = useState(10000);
	const [nameFilter, setNameFilter] = useState("Produto");
	const [productsInCart, setProductsInCart] = useState([
		{
			id: 4,
			name: "Produto 4",
			price: 450,
			photo: "https://picsum.photos/200/200?a=4",
			quantity: 1,
		},
		{
			id: 3,
			name: "Produto 3",
			price: 30,
			photo: "https://picsum.photos/200/200?a=3",
			quantity: 2,
		},
	]);

	const onChangeMinFilter = (event) => {
		setMinFilter(event.target.value);
	};

	const onChangeMaxFilter = (event) => {
		setMaxFilter(event.target.value);
	};

	const onChangeNameFilter = (event) => {
		setNameFilter(event.target.value);
	};

	const onAddProductToCart = (productId) => {
		const productInCart = productsInCart.find(
			(product) => productId === product.id
		);

		if (productInCart) {
			const newProductsInCart = productsInCart.map((product) => {
				if (productId === product.id) {
					return {
						...product,
						quantity: product.quantity + 1,
					};
				}
				return product;
			});

			setProductsInCart(newProductsInCart);
		} else {
			const productToAdd = products.find(
				(product) => productId === product.id
			);

			const newProductsInCart = [
				...productsInCart,
				{ ...productToAdd, quantity: 1 },
			];

			setProductsInCart(newProductsInCart);
		}
	};

	const onRemoveProductFromCart = (productId) => {
		const newProductsInCart = productsInCart
			.map((product) => {
				if (product.id === productId) {
					return {
						...product,
						quantity: product.quantity - 1,
					};
				}
				return product;
			})
			.filter((product) => product.quantity > 0);

		setProductsInCart(newProductsInCart);
	};

	return (
		<AppContainer>
			<Filters
				minFilter={minFilter}
				maxFilter={maxFilter}
				nameFilter={nameFilter}
				onChangeMinFilter={onChangeMinFilter}
				onChangeMaxFilter={onChangeMaxFilter}
				onChangeNameFilter={onChangeNameFilter}
			/>
			<Products
				products={products}
				minFilter={minFilter}
				maxFilter={maxFilter}
				nameFilter={nameFilter}
				onAddProductToCart={onAddProductToCart}
			/>
			<ShoppingCart
				productsInCart={productsInCart}
				onRemoveProductFromCart={onRemoveProductFromCart}
			/>
		</AppContainer>
	);
}

export default App;
