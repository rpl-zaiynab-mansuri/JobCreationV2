import React from "react";
import { render, screen } from "@testing-library/react";
import BlockSelection from "../components/BlockSelection/BlockSelection";
import "@testing-library/jest-dom"; // Ensures .toBeInTheDocument works

test("renders BlockSelection component", () => {
  render(<BlockSelection />);

  // Check static texts
  expect(screen.getByText("Select target blocks from the map or panel")).toBeInTheDocument();

  // Check Block List Items
  expect(screen.getByText("Block A")).toBeInTheDocument();
  expect(screen.getByText("Block B")).toBeInTheDocument(); // Added for completeness
  expect(screen.getByText("Block C")).toBeInTheDocument(); // Added for completeness
  expect(screen.getByText("Block D")).toBeInTheDocument(); // Added for completeness
  expect(screen.getByText("Block E")).toBeInTheDocument(); // Added for completeness
  
  // Check Payload Dropdown label
  expect(screen.getByLabelText("Payload")).toBeInTheDocument();

  // Check that the select options exist (optional)
  expect(screen.getByRole("combobox")).toBeInTheDocument(); // Ensure dropdown is present
});
