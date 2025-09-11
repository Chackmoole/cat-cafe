import styled from 'styled-components';
import { marginSpacing } from './margin-spacing';
import { textVariant } from './text-variant';

export const StyledText = styled.span`
	font-family: ${(props) => props.theme.FONTS.fontFamily};

	${textVariant}
	//margin
	${marginSpacing}
`;
