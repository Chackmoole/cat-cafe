import { StarIcon, StarIcons } from '../../ui/star-icon/star-icon';
import {
	StarCardDescription,
	StarCardImg,
	StarCardStyled,
	StarCardTitle,
} from './star-card-style';

export const StarCard = ({ src, title, text, icon }) => {
	return (
		<StarCardStyled>
			<StarCardImg src={src} alt={src} width={313} height={313} />
			<StarCardTitle>{title}</StarCardTitle>
			<StarCardDescription>{text}</StarCardDescription>
			{icon !== 'empty' ? (
				<StarIcon variant={StarIcons[icon.toUpperCase()]} />
			) : (
				''
			)}
		</StarCardStyled>
	);
};
