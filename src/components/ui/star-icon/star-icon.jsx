import { Text } from '../text/text.jsx';
import './star-icon-styled.js';
import { StyledStarIcon } from './star-icon-styled.js';

export const StarIcons = {
	NEW: 'new',
	SOFT: 'soft',
};

export const StarIcon = ({ variant }) => {
	return (
		<StyledStarIcon $variant={variant}>
			<Text>{variant === StarIcons.NEW ? 'NEW' : 'ЛАСКОВЫЙ'}</Text>
		</StyledStarIcon>
	);
};
