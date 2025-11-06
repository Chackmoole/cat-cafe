import styled from "styled-components";

export const StyledAccordionListItem = styled.li`
  position: relative;
  margin-left: 16px;

  &:before {
    position: absolute;
    content: "";
    top: 50%;
    left: -16px;
    background-color: ${(props) => props.theme.colors.colorBlackForText};
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transform: translate(0, -50%);
  }
`;
