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
  margin-bottom: 24px;
`;

export const StyledOrderTicketType = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
