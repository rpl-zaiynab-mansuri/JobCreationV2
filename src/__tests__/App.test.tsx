
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders the main app components", () => {
  render(<App />);

  // Check for Header
  expect(screen.getByRole("banner")).toBeInTheDocument();

  // Check for BlockSelection
  expect(screen.getByText("Block Selection")).toBeInTheDocument();

  // Check for JobConfiguration
  expect(screen.getByText("Job Configuration")).toBeInTheDocument();

  // Check for Footer
  expect(screen.getByRole("contentinfo")).toBeInTheDocument();
});
