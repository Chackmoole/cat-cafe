import { css, default as styled } from 'styled-components';
import { marginSpacing } from './margin-spacing';

export const StyledText = styled.span`
	font-family: ${(props) => props.theme.FONTS.fontFamily};

	${({ $variant }) => {
		switch ($variant) {
			case 'h1':
				return css`
					font-size: 44px;
					line-height: 115%;
					font-weight: 700;
				`;
			case 'h2':
				return css`
					font-size: 36px;
					line-height: 115%;
					font-weight: 700;
				`;
			case 'h3':
				return css`
					font-size: 32px;
					line-height: 115%;
					font-weight: 700;
				`;
			case 'subtitle1':
				return css`
					font-size: 28px;
					line-height: 150%;
					font-weight: 700;
				`;
			case 'subtitle2':
				return css`
					font-size: ${(props) => props.theme.FONTS.fontSizeDefault};
					line-height: 150%;
					font-weight: 700;
				`;
			case 'body1':
				return css`
					font-size: ${(props) => props.theme.FONTS.fontSizeDefault};
					line-height: 150%;
					font-weight: 400;
				`;
			case 'body2':
				return css`
					font-size: 14px;
					line-height: 130%;
					font-weight: 400;
				`;
			default:
				return css`
					font-size: ${(props) => props.theme.FONTS.fontSizeDefault};
					line-height: 150%;
					font-weight: 400;
				`;
		}
	}}

	//margin
	${marginSpacing}
`;
