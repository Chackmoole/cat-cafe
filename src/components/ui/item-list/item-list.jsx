import { StyledItemList, StyledItemListElement } from "./item-list-styled";
import { Text } from "../text/text";

export const ItemList = ({ data }) => {
  console.log(data);
  return (
    <StyledItemList>
      {data.map((item) => (
        <StyledItemListElement key={item.id}>
          <Text variant="body2">{item.text}</Text>
        </StyledItemListElement>
      ))}
    </StyledItemList>
  );
};
