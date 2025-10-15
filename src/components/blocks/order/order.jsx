import { StyledOrder, StyledOrderBox, StyledOrderImg } from "./order-styled";
import { Text } from "../../ui/text/text";
import orderPicture from "../../../assests/svg/order-img.svg";
import { OrderCard } from "../order-card/order-card";

export const Order = () => {
  return (
    <StyledOrder>
      <Text variant="h1" mb={24}>
        Купить билет
      </Text>
      <StyledOrderBox>
        <OrderCard />
        <StyledOrderImg src={orderPicture} alt="кот с цветком" />
      </StyledOrderBox>
    </StyledOrder>
  );
};
