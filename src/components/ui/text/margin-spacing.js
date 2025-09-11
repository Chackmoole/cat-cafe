import { css } from 'styled-components';

export const marginSpacing = css`
	${(props) => {
		if (typeof props.$m === 'number') {
			return css`
				margin: ${(props) => props.$m + 'px'};
			`;
		} else {
			return css`
				margin: 0;
			`;
		}
	}}
	${(props) => {
		if (typeof props.$my === 'number') {
			return css`
				margin-top: ${(props) => props.$my + 'px'};
				margin-bottom: ${(props) => props.$my + 'px'};
			`;
		}
	}}
	${(props) => {
		if (typeof props.$mx === 'number') {
			return css`
				margin-left: ${(props) => props.$mx + 'px'};
				margin-right: ${(props) => props.$mx + 'px'};
			`;
		}
	}}
	${(props) => {
		if (typeof props.$mt === 'number') {
			return css`
				margin-top: ${(props) => props.$mt + 'px'};
			`;
		}
	}}
	${(props) => {
		if (typeof props.$mr === 'number') {
			return css`
				margin-right: ${(props) => props.$mr + 'px'};
			`;
		}
	}}
	${(props) => {
		if (typeof props.$mb === 'number') {
			return css`
				margin-bottom: ${(props) => props.$mb + 'px'};
			`;
		}
	}}
	${(props) => {
		if (typeof props.$ml === 'number') {
			return css`
				margin-left: ${(props) => props.$ml + 'px'};
			`;
		}
	}}
`;
