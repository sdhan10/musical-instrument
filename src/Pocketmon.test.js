import React from "react";
import { render } from "@testing-library/react";
import MusicalInstrument from "./MusicalInstrument";

test("renders learn react link", () => {
  const { getByText } = render(<MusicalInstrument />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
