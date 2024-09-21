import { KategoriKursus } from ".";

export default {
  title: "Components/KategoriKursus",
  component: KategoriKursus,
  argTypes: {
    hover: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    hover: "off",
    rectangle: "/img/rectangle-4.png",
    text: "Kategori Kursus",
    divClassName: {},
  },
};
