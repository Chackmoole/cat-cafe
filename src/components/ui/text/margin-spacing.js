import { css } from 'styled-components';

export const marginSpacing = css`
	${(props) => {
		console.log(props);

		if (props.$mt) {
			console.log('mt');
			return css`
				margin: ${(props) => props.$mt + 'px'} 0 0 0;
			`;
		} else if (props.$mr) {
			console.log('mr');
			return css`
				margin: 0 ${(props) => props.$mr + 'px'} 0 0;
			`;
		} else if (props.$mb) {
			console.log('mb');
			return css`
				margin: 0 0 ${(props) => props.$mb + 'px'} 0;
			`;
		} else if (props.$ml) {
			console.log('ml');
			return css`
				margin: 0 0 0 ${(props) => props.$ml + 'px'};
			`;
		} else if (props.$mx) {
			console.log('mx');
			return css`
				margin: 0 ${(props) => props.$mx + 'px'};
			`;
		} else if (props.$my) {
			console.log('my');
			return css`
				margin: ${(props) => props.$my + 'px'} 0;
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
