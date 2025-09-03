import { StyledPlate } from './plate-styled';

export const Plate = ({ children, className = '' }) => {
	return <StyledPlate>{children}</StyledPlate>;
};
