import {
  StyledOrderCard,
  StyledOrderDurationBox,
  StyledOrderDurationButton,
  StyledOrderDurationInner,
  StyledOrderDurationLabel,
} from "./order-card-styled";
import { Text } from "../../ui/text/text";

export const OrderCard = () => {
  return (
    <StyledOrderCard>
      <Text variant="subtitle2" mb={12}>
        Продолжительность (часов)
      </Text>
      <div>
        <form>
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
        </form>
      </div>
    </StyledOrderCard>
  );
};
