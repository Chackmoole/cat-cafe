import { Button } from '../../ui/button/button';
import { Text } from '../../ui/text/text';
import { StarsList } from '../stars-list/stars-list';
import { StyledStars } from './stars-styled';

export const Stars = () => {
	return (
		<StyledStars>
			<Text variant='h2' mb='64'>
				Наши звезды
			</Text>
			<StarsList />
			<Button minWidth='353'>Купить билет</Button>
		</StyledStars>
	);
};
