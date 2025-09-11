import { StyledPrimaryButton } from './button-styled';

export const Button = ({ children, minWidth }) => {
	return (
		<StyledPrimaryButton $minWidth={minWidth}>{children}</StyledPrimaryButton>
	);
};
