import styled from "styled-components";
import starsCatPaw from "./../../../assests/svg/cat-paw.svg";
import starsBgLeaves from "./../../../assests/svg/stars-bg-leaves.svg";
import starsBgSpot from "./../../../assests/svg/stars-bg-spot.svg";
import { Text } from "../../ui/text/text";

export const StyledStars = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.colorForDarkBackground};
  padding: 100px 90px 80px;

  &:before {
    position: absolute;
    content: ${`url(${starsBgSpot})`};
    left: 0;
    bottom: -7px;
  }

  &:after {
    position: absolute;
    content: ${`url(${starsBgLeaves})`};
    right: 0;
    bottom: 0;
  }
`;

export const StyledStarsTitle = styled(Text)`
  position: relative;
  width: 100%;
  text-align: center;

  &:before {
    position: absolute;
    content: ${`url(${starsCatPaw})`};
    left: -90px;
    top: -70px;
  }
`;
