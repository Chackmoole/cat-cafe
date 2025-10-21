import styled from "styled-components";

export const StyledOrderCard = styled.article`
  width: 540px;
  min-height: 511px;
  background: ${(props) => props.theme.colors.colorWhite};
  padding: 40px;
  border-radius: 20px;
  z-index: 2;
`;

export const StyledOrderForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledOrderLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledOrderDurationBox = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

export const StyledOrderDurationInner = styled.div`
  position: relative;
`;

export const StyledOrderDurationLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.colorGreyForOrder};
`;

export const StyledOrderDurationButton = styled.input`
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

export const StyledOrderTicketType = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
