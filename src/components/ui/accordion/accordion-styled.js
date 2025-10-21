import styled from "styled-components";
import arrowElement from "../../../assests/svg/accordion-arrow.svg";
import { Radio } from "../radio/radio";

export const StyledAccordion = styled.div`
  position: relative;
  width: 460px;
  min-height: 48px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.colorGreyForOrder};
  border-radius: 10px;

  &:after {
    content: ${`url(${arrowElement})`};
    position: absolute;
    right: 20px;
    top: 55%;
    transform: translateY(-50%);
  }
`;

export const StyledAccordionRadio = styled(Radio)`
  margin-right: 8px;
`;
