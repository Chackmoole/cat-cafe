import styled from 'styled-components';

export const StyledPlate = styled.p`
	display: inline-block;
	margin: 0 0 20px;
	padding: 8px;
	background-color: ${(props) => props.theme.colorForDarkBackground};
	border: 8px;
`;
