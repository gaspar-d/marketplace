import React, { useState } from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const ProductsContainer = styled.div`
	border: 1px solid black;
`;

const ProductsHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 16px;
`;

const ProductsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 16px;
	padding: 16px;
`;

const Products = (props) => {
	const [sort, setSort] = useState("CRESCENTE");

	const getFilteredAndOrderedList = () => {
		return props.products
			.filter((product) => product.price < props.maxFilter)
			.filter((product) => product.price > props.minFilter)
			.filter((product) => product.name.includes(props.nameFilter))
			.sort((a, b) =>
				sort === "CRESCENTE" ? a.price - b.price : b.price - a.price
			);
	};

	const filteredAndOrderedList = getFilteredAndOrderedList();

	const onChangeSort = (event) => {
		setSort(event.target.value);
	};

	return (
		<ProductsContainer>
			<ProductsHeader>
				<p>Quantidade de produtos: {filteredAndOrderedList.length}</p>
				<label>
					Ordenação:
					<select value={sort} onChange={onChangeSort}>
						<option value={"CRESCENTE"}>Crescente</option>
						<option value={"DECRESCENTE"}>Decrescente</option>
					</select>
				</label>
			</ProductsHeader>
			<ProductsGrid>
				{filteredAndOrderedList.map((product) => {
					return (
						<ProductCard
							product={product}
							onAddProductToCart={props.onAddProductToCart}
						/>
					);
				})}
			</ProductsGrid>
		</ProductsContainer>
	);
};

export default Products;
