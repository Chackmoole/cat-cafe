import { Button } from '../../ui/button/button';
import { Logo } from '../../ui/logo/logo';
import { StyledHeader } from './header-styled';

export const Header = () => {
	return (
		<StyledHeader>
			<Logo />
			<Button>Купить билет </Button>
		</StyledHeader>
	);
};
