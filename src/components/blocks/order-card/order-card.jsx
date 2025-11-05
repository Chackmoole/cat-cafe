import {
  StyledOrderCard,
  StyledOrderDurationBox,
  StyledOrderDurationButton,
  StyledOrderDurationInner,
  StyledOrderDurationLabel,
  StyledOrderForm,
  StyledOrderLayout,
  StyledOrderTicketType,
} from "./order-card-styled";
import { Text } from "../../ui/text/text";
import { Accordion } from "../../ui/accordion/accordion";
import { Radio } from "../../ui/radio/radio";
import { ItemList } from "../../ui/item-list/item-list";
import { vipFeatures } from "../../../mocks/VIP-features-list";

//TODO вынести блок кнопок

export const OrderCard = () => {
  return (
    <StyledOrderCard>
      <StyledOrderForm>
        <StyledOrderLayout>
          <Text variant="subtitle2" mb={12}>
            Продолжительность (часов)
          </Text>
          <StyledOrderDurationBox>
            <StyledOrderDurationInner>
              <StyledOrderDurationButton
                type="radio"
                name="duration"
                defaultChecked
              />
              <StyledOrderDurationLabel htmlFor="">1</StyledOrderDurationLabel>
            </StyledOrderDurationInner>
            <StyledOrderDurationInner>
              <StyledOrderDurationButton type="radio" name="duration" />
              <StyledOrderDurationLabel htmlFor="">2</StyledOrderDurationLabel>
            </StyledOrderDurationInner>
            <StyledOrderDurationInner>
              <StyledOrderDurationButton type="radio" name="duration" />
              <StyledOrderDurationLabel htmlFor="">3</StyledOrderDurationLabel>
            </StyledOrderDurationInner>
            <StyledOrderDurationInner>
              <StyledOrderDurationButton type="radio" name="duration" />
              <StyledOrderDurationLabel htmlFor="">4</StyledOrderDurationLabel>
            </StyledOrderDurationInner>
            <StyledOrderDurationInner>
              <StyledOrderDurationButton type="radio" name="duration" />
              <StyledOrderDurationLabel htmlFor="">5</StyledOrderDurationLabel>
            </StyledOrderDurationInner>
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
