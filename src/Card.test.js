import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

it("renders", function() {
  render(<Card />);
});

it("match snapshot", function() {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});
