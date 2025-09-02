import styled from 'styled-components';

export const StyledPrimaryButton = styled.button`
	width: 220px;
	height: 60px;
	min-width: ${(props) => `${props.$minWidth}px` || '100%'};
	font-size: 18px;
	line-height: 150%;
	font-weight: bold;
	color: ${(props) => props.theme.colorWhite};
	background-color: ${(props) => props.theme.colorForButton};
	border: none;
	border-radius: 5px;

	&:hover {
		background-color: ${(props) => props.theme.colorForButtonHover};
		box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.14) inset;
	}

	&:active {
		box-shadow: none;
	}
`;
