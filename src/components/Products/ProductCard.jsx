import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
	border: 1px solid black;
	display: flex;
	flex-direction: column;
`;

const CardInfo = styled.div`
	display: flex;
	flex-direction: column;
	padding: 16px;
	p {
		margin: 4px 0;
	}
`;

const AddToCartButton = styled.button`
	align-self: center;
	margin-top: 4px;
`;

const ProductCard = (props) => {
	return (
		<CardContainer>
			<img src={props.product.photo} alt="fotos dos produtos" />
			<CardInfo>
				<p>{props.product.name}</p>
				<p>R${props.product.price}</p>
				<AddToCartButton
					onClick={() => props.onAddProductToCart(props.product.id)}
				>
					Adicionar ao carrinho
				</AddToCartButton>
			</CardInfo>
		</CardContainer>
	);
};

export default ProductCard;
