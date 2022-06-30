import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello React typescript/i);
  expect(linkElement).toBeInTheDocument();
});

test("render cool", () => {
  render(<App />);
  const elmnt = screen.getByTestId("custom-element");
  expect(elmnt).toBeInTheDocument();
});
