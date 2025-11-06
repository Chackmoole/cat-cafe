import styled from "styled-components";
import arrowImg from "../../../../assests/svg/accordion-arrow.svg";

export const StyledAccordionArrowButton = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  background-color: transparent;
  background-image: ${`url(${arrowImg})`};
  background-repeat: no-repeat;
  background-position: center;
  margin-left: auto;
`;
