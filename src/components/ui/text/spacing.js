import { css } from 'styled-components';

export const spacing = css`
	margin-top: ${(props) => props.$mt + 'px' || 0};
	margin-right: ${(props) => props.$mr + 'px' || 0};
	margin-bottom: ${(props) => props.$mb + 'px' || 0};
	margin-left: ${(props) => props.$mt + 'px' || 0};
`;
