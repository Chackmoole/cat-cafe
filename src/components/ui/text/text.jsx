import './text-style.css';
import './text-styled.js';
import { StyledText } from './text-styled.js';

// export const TextVariant = {
// 	normal: 'text',
// 	bold: 'text text--bold',
// 	mini: 'text text--small',
// };

// export const Text = ({
// 	children,
// 	variant = TextVariant.normal,
// 	className = '',
// }) => {
// 	return <p className={`${variant} ${className}`}>{children}</p>;
// };

// ////

const defaultVariantMapping = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	subtitle1: 'h6',
	subtitle2: 'h6',
	body1: 'p',
	body2: 'p',
};

export const Text = ({
	children,
	variant = 'body',
	m,
	mx,
	my,
	mt,
	mr,
	mb,
	ml,
	...props
}) => {
	return (
		<StyledText
			$variant={variant}
			as={defaultVariantMapping[variant]}
			$m={m}
			$mx={mx}
			$my={my}
			$mt={mt}
			$mr={mr}
			$mb={mb}
			$ml={ml}
			{...props}
		>
			{children}
		</StyledText>
	);
};
