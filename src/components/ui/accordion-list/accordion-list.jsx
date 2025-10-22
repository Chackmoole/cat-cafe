import { StyledAccordionList } from "./accordion-list-styled";
import { AccordionListItem } from "../accordion-list-item/accordion-list-item";
import { Text } from "../text/text";

export const AccordionList = () => {
  return (
    <StyledAccordionList>
      <AccordionListItem>
        <Text variant="body2">Акции по пристройству и выставки кошек</Text>
      </AccordionListItem>
      <AccordionListItem>
        <Text variant="body2">Акции по пристройству и выставки кошек</Text>
      </AccordionListItem>
      <AccordionListItem>
        <Text variant="body2">Акции по пристройству и выставки кошек</Text>
      </AccordionListItem>
    </StyledAccordionList>
  );
};
