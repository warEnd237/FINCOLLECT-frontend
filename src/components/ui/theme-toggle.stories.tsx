import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ModeToggle } from "./theme-toggle";

const meta: Meta<typeof ModeToggle> = {
  title: "UI/ThemeToggle",
  component: ModeToggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithDarkBackground: Story = {
  args: {},
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const WithNightBackground: Story = {
  args: {},
  parameters: {
    backgrounds: {
      default: "night",
      values: [
        {
          name: "night",
          value: "#0a0a0a",
        },
      ],
    },
  },
};
