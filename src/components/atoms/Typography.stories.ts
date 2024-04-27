import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  component: Typography,
};
export default meta;

type Story = StoryObj<typeof Typography>;

export const Title: Story = {
  args: {
    mode: "title",
    size: "large",
    align: "center",
    children: "Title Here",
  },
};

export const Subtitle: Story = {
  args: {
    mode: "subtitle",
    size: "medium",
    align: "center",
    children: "Subtitle Here",
  },
};

export const Strong: Story = {
  args: {
    mode: "strong",
    size: "small",
    align: "center",
    children: "Strong Here",
  },
};

export const Body: Story = {
  args: {
    mode: "body",
    size: "medium",
    align: "center",
    children: "Any paragraph Here",
  },
};
