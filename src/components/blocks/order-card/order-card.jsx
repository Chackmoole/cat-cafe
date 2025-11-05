import {
  StyledOrderCard,
  StyledOrderDurationBox,
  StyledOrderForm,
  StyledOrderLayout,
  StyledOrderTicketType,
} from "./order-card-styled";
import { Text } from "../../ui/text/text";
import { Accordion } from "../../ui/accordion/accordion";
import { Radio } from "../../ui/radio/radio";
import { ItemList } from "../../ui/item-list/item-list";
import { vipFeatures } from "../../../mocks/VIP-features-list";
import { DurationHours } from "../duration-hours/duration-hours";
import { duration } from "../../../mocks/duration-hours";

export const OrderCard = () => {
  return (
    <StyledOrderCard>
      <StyledOrderForm>
        <StyledOrderLayout>
          <Text variant="subtitle2" mb={12}>
            Продолжительность (часов)
          </Text>
          <StyledOrderDurationBox>
            <DurationHours data={duration} />
          </StyledOrderDurationBox>
          <Text variant="subtitle2" mb={12}>
            Тип билета
          </Text>
          <StyledOrderTicketType>
            <Accordion
              headerText="Стандартный"
              headerContent={
                <Radio
                  mr={8}
                  name="ticketType"
                  value="standart"
                  defaultChecked
                />
              }
            />
            <Accordion
              headerText="VIP"
              headerContent={<Radio mr={8} name="ticketType" value="VIP" />}
              accordionBody={<ItemList data={vipFeatures} />}
            />
          </StyledOrderTicketType>
        </StyledOrderLayout>
      </StyledOrderForm>
    </StyledOrderCard>
  );
};
