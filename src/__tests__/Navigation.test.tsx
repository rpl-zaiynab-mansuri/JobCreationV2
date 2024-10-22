
import React from "react";
import { render, screen } from "@testing-library/react";
import Navigation from "../components/Navigation/Navigation";

describe("Navigation", () => {
  it("renders all navigation items", () => {
    render(<Navigation />);
    expect(screen.getByText("Block Selection")).toBeInTheDocument();
    expect(screen.getByText("Job Configuration")).toBeInTheDocument();
  });

  it("applies active styles to the first item", () => {
    render(<Navigation />);
    const activeItem = screen.getByText("Block Selection").closest("div");
    expect(activeItem).toHaveClass("text-red-600");
  });
});
