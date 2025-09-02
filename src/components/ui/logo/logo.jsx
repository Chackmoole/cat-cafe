import logo from '../../../assests/svg/logo.svg';
import { StyledLogo, StyledLogoImg } from './logo-styled';

export const Logo = () => {
	return (
		<StyledLogo href='public\index.html'>
			<StyledLogoImg src={logo} alt='Котокафе' />
			<span>Котокафе</span>
		</StyledLogo>
	);
};
