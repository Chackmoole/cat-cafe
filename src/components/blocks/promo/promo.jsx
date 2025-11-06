import { StyledPromo } from "./promo-styled";
import { Gallery } from "../gallary/gallery";
import { Order } from "../order/order";

export const Promo = () => {
  return (
    <>
      <StyledPromo>
        <Gallery />
      </StyledPromo>
      <Order />
    </>
  );
};
