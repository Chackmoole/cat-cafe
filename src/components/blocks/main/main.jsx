import { About } from "../about/about";
import { Stars } from "../stars/stars";
import { StyledMain } from "./main-styled";
import { Promo } from "../promo/promo";

export const Main = () => {
  return (
    <StyledMain>
      <Promo />
      <About />
      <Stars />
    </StyledMain>
  );
};
