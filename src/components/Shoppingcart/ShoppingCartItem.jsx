import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
	display: grid;
	grid-auto-flow: column;
	gap: 4px;
	align-items: center;
	p {
		margin: 0;
	}
`;

const ShoppingCartItem = (props) => {
	return (
		<ItemContainer>
			<p>{props.cartItem.quantity}x</p>
			<p>{props.cartItem.name}</p>
			<button
				onClick={() => props.onRemoveProductFromCart(props.cartItem.id)}
			>
				Remover
			</button>
		</ItemContainer>
	);
};

export default ShoppingCartItem;
