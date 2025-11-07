import { StyledAccordion } from "./accordion-styled";
import { AccordionHeader } from "./accordion-header/accordion-header";
import { useState } from "react";

export const Accordion = (props) => {
  const [isVisible, setVisible] = useState(false);
  const isPayLoaded = Boolean(props.accordionBody);

  return (
    <StyledAccordion>
      <AccordionHeader
        headerText={props.headerText}
        headerContent={props.headerContent}
        onClick={() => setVisible(!isVisible)}
        isVisible={isVisible}
        isPayLoaded={isPayLoaded}
      />
      {isVisible ? props.accordionBody : null}
    </StyledAccordion>
  );
};
