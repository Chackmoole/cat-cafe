import styled from 'styled-components';
import { Text } from '../text/text';

export const StyledPlate = styled(Text)`
	display: inline-block;
	padding: 8px;
	background-color: ${(props) => props.theme.COLORS.colorForDarkBackground};
	border: 8px;
`;
