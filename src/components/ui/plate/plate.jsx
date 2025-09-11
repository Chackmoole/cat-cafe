import { StyledPlate } from './plate-styled';

export const Plate = ({ children, ...props }) => {
	return (
		<StyledPlate mb={20} {...props}>
			{children}
		</StyledPlate>
	);
};
