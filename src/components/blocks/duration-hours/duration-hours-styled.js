import styled from "styled-components";

export const StyledDurationHours = styled.div`
  display: flex;
  gap: 12px;
`;

export const StyledDurationInner = styled.div`
  position: relative;
`;

export const StyledDurationButton = styled.input`
  position: absolute;
  appearance: none;
  width: 44px;
  height: 44px;
  margin: 0;
  top: 0;
  left: 0;

  &:checked + label {
    background-color: ${(props) => props.theme.colors.colorForButton};
    color: ${(props) => props.theme.colors.colorWhite};
  }
`;

export const StyledDurationLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.colorGreyForOrder};
`;
