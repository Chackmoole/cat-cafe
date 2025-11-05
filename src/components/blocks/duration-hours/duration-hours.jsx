import {
  StyledDurationButton,
  StyledDurationHours,
  StyledDurationInner,
  StyledDurationLabel,
} from "./duration-hours-styled";

export const DurationHours = ({ data }) => {
  return (
    <StyledDurationHours>
      {data.map((item) => {
        return (
          <StyledDurationInner key={item.id}>
            <StyledDurationButton
              type={item.type}
              name={item.name}
              defaultChecked={item.defaultChecked}
            />
            <StyledDurationLabel>{item.value}</StyledDurationLabel>
          </StyledDurationInner>
        );
      })}
    </StyledDurationHours>
  );
};
