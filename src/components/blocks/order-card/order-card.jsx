import {
  StyledOrderBuyButton,
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
import { priceList } from "../../../mocks/price-list";
import { useState } from "react";

export const OrderCard = () => {
  const [ticketTypeValue, setTicketTypeValue] = useState("standart");
  const handleTicketTypeChange = (event) => {
    setTicketTypeValue(event.target.value);
  };

  const [durationValue, setDurationValue] = useState(1);
  const handleDurationChange = (event) => {
    setDurationValue(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(ticketTypeValue, durationValue);
  };

  return (
    <StyledOrderCard>
      <StyledOrderForm
        action="https://echo.htmlacademy.ru/courses"
        method="get"
      >
        <StyledOrderLayout>
          <Text variant="subtitle2" mb={12}>
            Продолжительность (часов)
          </Text>
          <StyledOrderDurationBox>
            <DurationHours data={duration} onChange={handleDurationChange} />
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
                  onChange={handleTicketTypeChange}
                  defaultChecked
                />
              }
            />
            <Accordion
              headerText="VIP"
              headerContent={
                <Radio
                  mr={8}
                  name="ticketType"
                  value="vip"
                  onChange={handleTicketTypeChange}
                />
              }
              accordionBody={<ItemList data={vipFeatures} />}
            />
          </StyledOrderTicketType>
          <Text variant="body2" mb={8}>
            Цена
          </Text>
          <Text variant="h4" mb={40}>
            {priceList[ticketTypeValue] * durationValue} руб.
          </Text>
          <StyledOrderBuyButton onClick={handleOnSubmit}>
            Купить билет
          </StyledOrderBuyButton>
        </StyledOrderLayout>
      </StyledOrderForm>
    </StyledOrderCard>
  );
};
