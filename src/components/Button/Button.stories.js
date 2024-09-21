import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    varian: {
      options: [
        "custom-width-big-filled",
        "short-small-outline",
        "custom-width-big-outline",
        "short-big-outline",
        "custom-width-small-filled",
        "custom-width-small-outline",
        "short-big-filled",
        "short-small-filled",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    varian: "custom-width-big-filled",
    text: "Masuk",
  },
};
