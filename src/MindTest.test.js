import React from "react";
import { render } from "@testing-library/react";
import MindTest from "./MindTest";

test("renders learn react link", () => {
  const { getByText } = render(<MindTest />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
