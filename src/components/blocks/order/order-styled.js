import styled from "styled-components";
import orderBgSpot from "../../../assests/svg/order-bg-spot.svg";
import orderBgSpotRight from "../../../assests/svg/order-bg-spot-right.svg";

export const StyledOrder = styled.section`
  position: relative;
  background-color: ${(props) => props.theme.colors.colorForLightBackground};
  padding: 100px 70px;
  min-height: 786px;

  &:before {
    content: ${`url(${orderBgSpot})`};
    position: absolute;
    bottom: 0;
    left: 0;
  }
  &:after {
    content: ${`url(${orderBgSpotRight})`};
    position: absolute;
    top: 175px;
    right: 74px;
  }
`;

export const StyledOrderBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledOrderImg = styled.img`
  z-index: 2;
  padding-top: 102px;
`;
