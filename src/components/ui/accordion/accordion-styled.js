import styled from "styled-components";
import arrowElement from "../../../assests/svg/accordion-arrow.svg";
import { Radio } from "../radio/radio";

export const StyledAccordion = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.colorGreyForOrder};
  padding: 10px 20px;
  min-height: 48px;
  width: 460px;
  border-radius: 10px;
`;

export const StyledAccordionHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
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
