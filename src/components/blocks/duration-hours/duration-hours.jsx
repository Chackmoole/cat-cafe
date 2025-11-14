import {
  StyledDurationButton,
  StyledDurationHours,
  StyledDurationInner,
  StyledDurationLabel,
} from "./duration-hours-styled";

export const DurationHours = ({ data, onChange }) => {
  return (
    <StyledDurationHours>
      {data.map((item) => {
        return (
          <StyledDurationInner key={item.id}>
            <StyledDurationButton
              type={item.type}
              name={item.name}
              defaultChecked={item.defaultChecked}
              value={item.value}
              onChange={onChange}
            />
            <StyledDurationLabel>{item.value}</StyledDurationLabel>
          </StyledDurationInner>
        );
      })}
    </StyledDurationHours>
  );
};
