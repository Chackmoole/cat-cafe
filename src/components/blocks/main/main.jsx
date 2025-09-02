import { About } from "../about/about";
import { Stars } from "../stars/stars";
import { StyledMain } from "./main-style";

export const Main = () => {
	return (
		<StyledMain>
			<About />
			<Stars />
		</StyledMain>
	);
};
