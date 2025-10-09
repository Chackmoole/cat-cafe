import styled from 'styled-components';

export const StyledStarCard = styled.li`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 20px;
	width: 353px;
	min-height: 525px;
	background-color: ${(props) => props.theme.colors.colorWhite};
	border-radius: 12px;
`;

export const StyledStarCardImg = styled.img`
	display: block;
	margin-bottom: 20px;
	border-radius: 8px;
`;
