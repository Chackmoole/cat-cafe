import styled from "styled-components";
import orderSpotBg from "../../../assests/svg/order-bg-spot.svg";

export const StyledOrder = styled.section`
  position: relative;
  background-color: ${(props) => props.theme.colors.colorForLightBackground};
  padding: 100px 70px;
  min-height: 550px;

  &:before {
    content: ${`url(${orderSpotBg})`};
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
