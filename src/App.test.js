import { render, fireEvent } from "@testing-library/react";
import Box from "./Box";
import BoxList from "./BoxList";
import BoxForm from "./BoxForm";

it("renders without crashing", function () {
  render(<Box />);
  render(<BoxList />);
  render(<BoxForm />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxForm />);
  expect(asFragment()).toMatchSnapshot();
});
