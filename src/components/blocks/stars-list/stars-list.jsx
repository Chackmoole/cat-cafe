import { catsList } from '../../../mocks/cats-list';
import { StarCard } from '../star-card/star-card';
import { SyledStars } from './stars-list-styled';

export const StarsList = () => {
	return (
		<SyledStars>
			{catsList.map((item) => (
				<StarCard
					key={item.id}
					src={item.image}
					title={item.name}
					text={item.about}
					feature={item.feature}
					icon={item.feature}
				></StarCard>
			))}
		</SyledStars>
	);
};
