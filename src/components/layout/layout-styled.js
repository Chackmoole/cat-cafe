import styled from 'styled-components';

export const StyledLayout = styled.div`
	display: flex;
	flex-direction: column;
	width: ${(props) => props.theme.SIZES.pageWidth};
	margin: 0 auto;
	min-height: 100vh;
`;
