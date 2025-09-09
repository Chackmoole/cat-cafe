import styled from 'styled-components';
import { Text } from '../../ui/text/text';
import mark from './../../../assests/svg/maps-and-flags1.svg';

export const StyledAbout = styled.section`
	display: flex;
	align-items: center;
	background-color: ${(props) => props.theme.colorForLightBackground};
	padding: 78px 90px;
`;

export const StyledAddress = styled(Text)`
	position: relative;
	padding-left: 20px;
	&:before {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 0;
		content: ${`url(${mark})`};
	}
`;
