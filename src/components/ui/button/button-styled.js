import styled from 'styled-components';

export const StyledPrimaryButton = styled.button`
	width: 220px;
	height: 60px;
	min-width: ${(props) => `${props.$minWidth}px` || '100%'};
	font-size: ${(props) => props.theme.FONTS.fontSizeDefault};
	line-height: 150%;
	font-weight: bold;
	color: ${(props) => props.theme.COLORS.colorWhite};
	background-color: ${(props) => props.theme.COLORS.colorForButton};
	border: none;
	border-radius: 5px;

	&:hover {
		background-color: ${(props) => props.theme.COLORS.colorForButtonHover};
		box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.14) inset;
	}

	&:active {
		box-shadow: none;
	}
`;
