import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

it("calls the onClick callback", () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <Button onClick={handleClick} label="Click Me"></Button>
  );
  fireEvent.click(getByText("Click Me"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
