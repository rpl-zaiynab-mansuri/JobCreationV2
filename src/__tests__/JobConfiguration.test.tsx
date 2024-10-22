
import React from "react";
import { render, screen } from "@testing-library/react";
import JobConfiguration from "../components/JobConfiguration/JobConfiguration";

test("renders JobConfiguration component", () => {
  render(<JobConfiguration />);

  expect(screen.getByText("Job Configuration")).toBeInTheDocument();
  expect(screen.getByText("Even Fan distribution")).toBeInTheDocument();
  expect(screen.getByText("Control Individual Fans")).toBeInTheDocument();
  expect(screen.getByLabelText("Job Name")).toBeInTheDocument();
  expect(screen.getByText("Fan Speed (rpm)")).toBeInTheDocument();
  expect(screen.getByText("Create Job")).toBeInTheDocument();
});
