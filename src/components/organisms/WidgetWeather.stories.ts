import { Meta, StoryObj } from "@storybook/react";

import { WidgetWeather } from "./WidgetWeather";

const meta: Meta<typeof WidgetWeather> = {
  component: WidgetWeather,
  title: "Components/WidgetWeather",
};

export default meta;

const weatherData = [
  { category: "Temperature", data: { value: 25, unit: "°C" } },
  { category: "Humidity", data: { value: 60, unit: "%" } },
];

type Story = StoryObj<typeof WidgetWeather>;

export const Default: Story = {
  args: {
    weatherData,
  },
};
