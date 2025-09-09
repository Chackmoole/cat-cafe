import styled from 'styled-components';

export const StyledStarIcon = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	padding: 8px 16px;
	color: ${(props) => props.theme.colorWhite};

	background-color: ${(props) =>
		props.$iconVariant === 'new'
			? props.theme.colorForNewIcon
			: props.theme.colorForSoftIcon};

	min-width: 20px;
	min-height: 20px;
	border-radius: 8px;
	border-bottom-left-radius: 0;
`;
