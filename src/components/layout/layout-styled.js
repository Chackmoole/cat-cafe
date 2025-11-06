import styled from 'styled-components';

export const StyledLayout = styled.div`
	display: flex;
	flex-direction: column;
	width: ${(props) => props.theme.sizes.pageWidth};
	margin: 0 auto;
	min-height: 100vh;
`;
