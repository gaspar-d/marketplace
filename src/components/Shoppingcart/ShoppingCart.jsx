import React from "react";
import ShoppingCartItem from "./ShoppingCartItem";

import styled from "styled-components";

const ShoppingCardContainer = styled.div`
	border: 1px solid black;
	padding: 8px;
`;

const CardListContainer = styled.div`
	display: grid;
	gap: 8px;
`;

const ShoppingCart = (props) => {
	const getTotalValue = () => {
		let totalValue = 0;

		for (let product of props.productsInCart) {
			totalValue += product.price * product.quantity;
		}
		return totalValue;
	};

	return (
		<ShoppingCardContainer>
			<h3>Carrinho:</h3>
			<CardListContainer>
				{props.productsInCart.map((product) => {
					return (
						<ShoppingCartItem
							cartItem={product}
							onRemoveProductFromCart={
								props.onRemoveProductFromCart
							}
						/>
					);
				})}
			</CardListContainer>
			<p>Valor total: R${getTotalValue()}</p>
		</ShoppingCardContainer>
	);
};

export default ShoppingCart;
