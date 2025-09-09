import { css } from 'styled-components';

export const marginSpacing = css`
	${(props) => {
		console.log(props);

		if (props.$mt) {
			console.log('mt');
			return css`
				margin-top: ${(props) => props.$mt + 'px'};
			`;
		} else if (props.$mr) {
			console.log('mr');
			return css`
				margin-right: ${(props) => props.$mr + 'px'};
			`;
		} else if (props.$mb) {
			console.log('mb');
			return css`
				margin-bottom: ${(props) => props.$mb + 'px'};
			`;
		} else if (props.$ml) {
			console.log('ml');
			return css`
				margin-left: ${(props) => props.$ml + 'px'};
			`;
		} else if (props.$mx) {
			console.log('mx');
			return css`
				margin-right: ${(props) => props.$mx + 'px'};
				margin-left: ${(props) => props.$mx + 'px'};
			`;
		} else if (props.$my) {
			console.log('my');
			return css`
				margin-top: ${(props) => props.$my + 'px'};
				margin-bottom: ${(props) => props.$my + 'px'};
			`;
		} else if (props.$m) {
			console.log('$	m');
			return css`
				margin: ${(props) => props.$m + 'px'};
			`;
		} else {
			console.log('mttttt');
			return css`
			margin: 0};
			`;
		}
	}};
`;
