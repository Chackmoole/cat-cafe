import { StarIcon, StarIcons } from '../../ui/star-icon/star-icon';
import { Text } from '../../ui/text/text';
import { StyledStarCard, StyledStarCardImg } from './star-card-styled';

export const StarCard = ({ src, title, text, icon }) => {
	return (
		<StyledStarCard>
			<StyledStarCardImg src={src} alt={src} width={313} height={313} />
			<Text variant='subtitle1' mb={12}>
				{title}
			</Text>
			<Text variant='body1'>{text}</Text>
			{icon !== 'empty' ? (
				<StarIcon iconVariant={StarIcons[icon.toUpperCase()]} />
			) : (
				''
			)}
		</StyledStarCard>
	);
};
