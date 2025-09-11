import { Footer } from './footer/footer';
import { Header } from './header/header';
import { StyledLayout } from './layout-styled';

export const Layout = ({ children }) => {
	return (
		<StyledLayout>
			<Header />
			{children}
			<Footer />
		</StyledLayout>
	);
};
