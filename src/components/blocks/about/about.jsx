import aboutPicture from '../../../assests/img/about.png';
import { Plate } from '../../ui/plate/plate';
import { Text } from '../../ui/text/text';
import { StyledAbout, StyledAddress } from './about-styled';

export const About = () => {
	return (
		<StyledAbout>
			<div>
				<Text variant='h1' mb={20}>
					Первое в России котокафе
				</Text>
				<Text variant='body1' mb={40}>
					Крупнейшее котокафе России, в&nbsp;котором живёт 50&nbsp;кошек
					и&nbsp;котов, и&nbsp;каждый из&nbsp;них ищет новый дом. Животных можно
					гладить, фотографировать, играть с&nbsp;ними.
				</Text>
				<Plate variant='body1'>Рабочее время с 8:00 до 23:00</Plate>
				<StyledAddress variant='body1'>
					Санкт-Петербург, набережная реки Карповки, дом&nbsp;5, литера&nbsp;П
				</StyledAddress>
			</div>
			<img src={aboutPicture} alt='Отдых с котом' width={446} height={446} />
		</StyledAbout>
	);
};
