import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { ThemeToggle } from "../theme-toggle";

// Mock next-themes
const mockSetTheme = vi.fn();

vi.mock("next-themes", () => ({
  useTheme: vi.fn(() => ({
    theme: "light",
    setTheme: mockSetTheme,
    resolvedTheme: "light",
  })),
}));

describe("ThemeToggle", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders correctly with light theme", () => {
    render(<ThemeToggle />);

    // Should show the dropdown trigger button
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("calls setTheme when menu item is clicked", () => {
    render(<ThemeToggle />);

    // Open the dropdown
    const trigger = screen.getByRole("button");
    fireEvent.click(trigger);

    // Click on Dark theme option
    const darkOption = screen.getByRole("menuitem", { name: /dark/i });
    fireEvent.click(darkOption);

    expect(mockSetTheme).toHaveBeenCalledWith("dark");
  });

  it("displays correct theme options in dropdown", () => {
    render(<ThemeToggle />);

    // Open the dropdown
    const trigger = screen.getByRole("button");
    fireEvent.click(trigger);

    expect(screen.getByText("Light")).toBeInTheDocument();
    expect(screen.getByText("Dark")).toBeInTheDocument();
    expect(screen.getByText("System")).toBeInTheDocument();
  });
});
