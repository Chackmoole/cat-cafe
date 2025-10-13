import { StyledOrder, StyledOrderBox, StyledOrderImg } from "./order-styled";
import { Text } from "../../ui/text/text";
import orderPicture from "../../../assests/svg/order-img.svg";

export const Order = () => {
  return (
    <StyledOrder>
      <Text variant="h1" mb={24}>
        Купить билет
      </Text>
      <StyledOrderBox>
        <StyledOrderImg src={orderPicture} alt="кот с цветком" />
      </StyledOrderBox>
    </StyledOrder>
  );
};
