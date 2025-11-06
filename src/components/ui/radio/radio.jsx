import { StyledRadio } from "./radio-styled";

export const Radio = ({ m, mx, my, mt, mr, mb, ml, ...props }) => {
  return (
    <StyledRadio
      type="radio"
      $m={m}
      $mx={mx}
      $my={my}
      $mt={mt}
      $mr={mr}
      $mb={mb}
      $ml={ml}
      {...props}
    />
  );
};
