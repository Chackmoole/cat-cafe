import { StyledAccordion, StyledAccordionRadio } from "./accordion-styled";
import { Text } from "../text/text";

export const Accordion = (props) => {
  if (props.isRadio) {
    return (
      <StyledAccordion>
        <StyledAccordionRadio />
        <Text as="label">{props.children}</Text>
      </StyledAccordion>
    );
  }
  return (
    <StyledAccordion>
      <Text>{props.children}</Text>
    </StyledAccordion>
  );
};
