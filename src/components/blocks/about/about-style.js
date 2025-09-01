import styled from "styled-components";
import { Plate } from "../../ui/plate/plate";
import { Text } from "../../ui/text/text";
import mark from "./../../../assests/svg/maps-and-flags1.svg";

export const StyledAbout = styled.section`
	display: flex;
	align-items: center;
	background-color: #fff6d9;
	padding: 78px 90px;
`;

export const StyledTitle = styled(Text)`
	margin: 0 0 20px 0;
`;

export const StyledDescription = styled(Text)`
	margin-bottom: 40px;
`;

export const StyledPlate = styled(Plate)`
	position: relative;
	padding-left: 20px;
	&:before {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 0;
		content: ${`url(${mark})`};
	}
`;
