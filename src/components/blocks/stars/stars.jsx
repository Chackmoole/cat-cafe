import { Button } from '../../ui/button/button';
import { TitleVariant } from '../../ui/title/title';
import { StarsList } from '../stars-list/stars-list';
import './stars-style.css';
import { StyledStars, StyledStarsTitle } from './stars-styled';

export const Stars = () => {
	return (
		<StyledStars>
			<StyledStarsTitle variant={TitleVariant.h2}>Наши звезды</StyledStarsTitle>
			<StarsList />
			<Button minWidth='353px'>Купить билет</Button>
		</StyledStars>
	);
};
