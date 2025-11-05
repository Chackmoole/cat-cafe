import { StyledAccordionHeader } from "./accordion-header-styled";
import { StyledAccordionArrowButton } from "../accordion-arrow-button/accordion-arrow-button-styled";
import { Text } from "../../text/text";

export const AccordionHeader = (props) => {
  return (
    <StyledAccordionHeader>
      {props.headerContent}
      <Text>{props.headerText}</Text>
      <StyledAccordionArrowButton />
    </StyledAccordionHeader>
  );
};
