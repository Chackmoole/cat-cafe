import styled from 'styled-components';

export const StyledStarIcon = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	padding: 8px 16px;
	color: ${(props) => props.theme.colors.colorWhite};

	background-color: ${(props) =>
		props.$iconVariant === 'new'
			? props.theme.colors.colorForNewIcon
			: props.theme.colors.colorForSoftIcon};

	min-width: 20px;
	min-height: 20px;
	border-radius: 8px;
	border-bottom-left-radius: 0;
`;
