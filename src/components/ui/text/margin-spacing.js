import { css } from 'styled-components';

export const marginSpacing = css`
	${(props) => {
		if (props.$mt) {
			return css`
				margin: ${(props) => props.$mt + 'px'} 0 0 0;
			`;
		} else if (props.$mr) {
			return css`
				margin: 0 ${(props) => props.$mr + 'px'} 0 0;
			`;
		} else if (props.$mb) {
			return css`
				margin: 0 0 ${(props) => props.$mb + 'px'} 0;
			`;
		} else if (props.$ml) {
			return css`
				margin: 0 0 0 ${(props) => props.$ml + 'px'};
			`;
		} else if (props.$mx) {
			return css`
				margin: 0 ${(props) => props.$mx + 'px'};
			`;
		} else if (props.$my) {
			return css`
				margin: ${(props) => props.$my + 'px'} 0;
			`;
		} else if (props.$m) {
			return css`
				margin: ${(props) => props.$m + 'px'};
			`;
		} else {
			return css`
			margin: 0};
			`;
		}
	}};
`;
