import { StyledOrder } from "./order-styled";
import { Text } from "../../ui/text/text";

export const Order = () => {
  return (
    <StyledOrder>
      <Text variant="h1" mb={24}>
        Купить билет
      </Text>
    </StyledOrder>
  );
};
