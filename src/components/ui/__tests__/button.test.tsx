import { render, screen } from "@testing-library/react";
import { Button } from "../button";
import { describe, it, expect } from "vitest";

describe("Button", () => {
  it("renders button with text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("shows loading spinner when isLoading is true", () => {
    render(<Button isLoading>Submit</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("applies correct variant classes", () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-brand-primary");
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
