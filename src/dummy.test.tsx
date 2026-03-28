import { render, screen } from "@testing-library/react";

test("works with vite", () => {
  render(<h1>Hello Vite</h1>);
  expect(screen.getByText("Hello Vite")).toBeInTheDocument();
});
