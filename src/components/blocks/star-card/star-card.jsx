import { StarIcon, StarIcons } from '../../ui/star-icon/star-icon';
import {
	StyledStarCard,
	StyledStarCardDescription,
	StyledStarCardImg,
	StyledStarCardTitle,
} from './star-card-styled';

export const StarCard = ({ src, title, text, icon }) => {
	return (
		<StyledStarCard>
			<StyledStarCardImg src={src} alt={src} width={313} height={313} />
			<StyledStarCardTitle>{title}</StyledStarCardTitle>
			<StyledStarCardDescription>{text}</StyledStarCardDescription>
			{icon !== 'empty' ? (
				<StarIcon variant={StarIcons[icon.toUpperCase()]} />
			) : (
				''
			)}
		</StyledStarCard>
	);
};
