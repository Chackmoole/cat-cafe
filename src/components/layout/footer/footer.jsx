import { Copyrigth } from '../../ui/copyrigth/copyrigth';
import { Logo } from '../../ui/logo/logo';
import { StyledFooter } from './footer-styled';

export const Footer = () => {
	return (
		<StyledFooter>
			<Logo />
			<Copyrigth />
		</StyledFooter>
	);
};
