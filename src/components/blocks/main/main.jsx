import { About } from '../about/about';
import { Stars } from '../stars/stars';
import { StyledMain } from './main-styled';

export const Main = () => {
	return (
		<StyledMain>
			<About />
			<Stars />
		</StyledMain>
	);
};
