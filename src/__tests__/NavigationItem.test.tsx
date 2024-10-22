
import React from "react";
import { render, screen } from "@testing-library/react";
import NavigationItem from "../components/Navigation/NavigationItem";

describe("NavigationItem", () => {
  it("renders with correct text and icon", () => {
    render(<NavigationItem icon="test-icon.png" text="Test Item" />);
    expect(screen.getByText("Test Item")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "test-icon.png");
  });

  it("applies active styles when isActive is true", () => {
    render(
      <NavigationItem icon="test-icon.png" text="Active Item" isActive={true} />
    );
    const item = screen.getByText("Active Item").closest("div");
    expect(item).toHaveClass("text-red-600");
  });
});
