import styled from 'styled-components';

export const StyledLogo = styled.a`
	display: flex;
	align-items: center;
	font-size: 28px;
	font-weight: bold;
	text-decoration: none;
	color: ${(props) => props.theme.colors.colorBlackForText};
`;

export const StyledLogoImg = styled.img`
	margin-right: 24px;
`;
