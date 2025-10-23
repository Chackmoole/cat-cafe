import { StyledAccordion } from "./accordion-styled";
import { AccordionHeader } from "../accordion-header/accordion-header";

export const Accordion = (props) => {
  return (
    <StyledAccordion>
      <AccordionHeader {...props}></AccordionHeader>
    </StyledAccordion>
  );
};
