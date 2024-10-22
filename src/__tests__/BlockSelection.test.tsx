
import React from "react";
import { render, screen } from "@testing-library/react";
import BlockSelection from "../components/BlockSelection/BlockSelection";

test("renders BlockSelection component", () => {
  render(<BlockSelection />);

  expect(screen.getByText("Block Selection")).toBeInTheDocument();
  expect(
    screen.getByText("Select target blocks from the map or panel")
  ).toBeInTheDocument();
  expect(screen.getByAltText("Block Selection Map")).toBeInTheDocument();
  expect(screen.getByText("Block A")).toBeInTheDocument();
  expect(screen.getByText("Payload")).toBeInTheDocument();
});
