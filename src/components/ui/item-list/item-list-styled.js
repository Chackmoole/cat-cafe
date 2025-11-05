import styled from "styled-components";

export const StyledItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  padding: 20px 0 0 0;
  list-style: none;
`;

export const StyledItemListElement = styled.li`
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
