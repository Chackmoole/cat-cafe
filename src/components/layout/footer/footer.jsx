import { Copyrigth } from '../../ui/copyrigth/copyrigth';
import { Logo } from '../../ui/logo/logo';
import { StyledFooter } from './footer-style';

export const Footer = () => {
	return (
		<StyledFooter>
			<Logo />
			<Copyrigth />
		</StyledFooter>
	);
};
