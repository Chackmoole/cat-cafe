import {
  StyledAccordion,
  StyledAccordionHeader,
  StyledAccordionRadio,
} from "./accordion-styled";
import { Text } from "../text/text";
import { AccordionList } from "../accordion-list/accordion-list";

export const Accordion = (props) => {
  if (props.isRadio) {
    return (
      <StyledAccordion>
        <StyledAccordionHeader>
          <StyledAccordionRadio />
          <Text as="label">{props.children}</Text>
        </StyledAccordionHeader>
      </StyledAccordion>
    );
  }
  return (
    <StyledAccordion>
      <StyledAccordionHeader>
        <Text>{props.children}</Text>
      </StyledAccordionHeader>
      <AccordionList />
    </StyledAccordion>
  );
};
