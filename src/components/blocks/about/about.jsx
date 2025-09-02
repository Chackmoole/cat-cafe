import aboutPicture from "../../../assests/img/about.png";
import { Plate } from "../../ui/plate/plate";
import { TextVariant } from "../../ui/text/text";
import { TitleVariant } from "../../ui/title/title";
import {
	StyledAbout,
	StyledAddress,
	StyledDescription,
	StyledTitle,
} from "./about-style";

export const About = () => {
	return (
		<StyledAbout>
			<div>
				<StyledTitle variant={TitleVariant.h1}>
					Первое в России котокафе
				</StyledTitle>
				<StyledDescription variant={TextVariant.normal}>
					Крупнейшее котокафе России, в&nbsp;котором живёт 50&nbsp;кошек
					и&nbsp;котов, и&nbsp;каждый из&nbsp;них ищет новый дом. Животных можно
					гладить, фотографировать, играть с&nbsp;ними.
				</StyledDescription>
				<Plate>Рабочее время с 8:00 до 23:00</Plate>
				<StyledAddress variant={TextVariant.normal}>
					Санкт-Петербург, набережная реки Карповки, дом&nbsp;5, литера&nbsp;П
				</StyledAddress>
			</div>
			<img src={aboutPicture} alt='Отдых с котом' width={446} height={446} />
		</StyledAbout>
	);
};
