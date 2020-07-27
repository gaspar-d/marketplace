import React from "react";
import styled from "styled-components";

const FiltersContainer = styled.div`
	border: 1px solid black;
	padding: 8px;
`;

const InputContainer = styled.label`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 8px;
`;

const Filters = (props) => {
	return (
		<FiltersContainer>
			<h3>Filtros</h3>
			<InputContainer>
				Valor Mínimo:
				<input
					type="number"
					value={props.minFilter}
					onChange={props.onChangeMinFilter}
				/>
			</InputContainer>

			<InputContainer>
				Valor máximo:
				<input
					type="number"
					value={props.maxFilter}
					onChange={props.onChangeMaxFilter}
				/>
			</InputContainer>

			<InputContainer>
				Buscar por nome:
				<input
					type="text"
					value={props.nameFilter}
					onChange={props.onChangeNameFilter}
				/>
			</InputContainer>
		</FiltersContainer>
	);
};

export default Filters;
