import { Button } from '../../ui/button/button';
import { StarsList } from '../stars-list/stars-list';
import { StyledStars, StyledStarsTitle } from './stars-styled';

export const Stars = () => {
	return (
		<StyledStars>
			<StyledStarsTitle variant='h2' mb='64'>
				Наши звезды
			</StyledStarsTitle>
			<StarsList />
			<Button minWidth='353'>Купить билет</Button>
		</StyledStars>
	);
};
