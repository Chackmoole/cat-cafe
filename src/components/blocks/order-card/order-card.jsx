import {
  StyledOrderCard,
  StyledOrderDurationBox,
  StyledOrderDurationButton,
  StyledOrderDurationInner,
  StyledOrderDurationLabel,
  StyledOrderForm,
  StyledOrderLayout,
} from "./order-card-styled";
import { Text } from "../../ui/text/text";
import { Accordion } from "../../ui/accordion/accordion";

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
          <Accordion />
        </StyledOrderLayout>
      </StyledOrderForm>
    </StyledOrderCard>
  );
};
