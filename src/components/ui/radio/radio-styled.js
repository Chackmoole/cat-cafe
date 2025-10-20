import styled from "styled-components";

export const StyledRadio = styled.input`
  position: relative;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.colorForButton};

  &:checked:before {
    content: "";
    width: 12px;
    height: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.colorForButton};
  }
`;
