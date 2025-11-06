import { StyledPrimaryButton } from "./button-styled";

export const Button = ({ children, minWidth = 44, ...props }) => {
  return (
    <StyledPrimaryButton $minWidth={minWidth} {...props}>
      {children}
    </StyledPrimaryButton>
  );
};
