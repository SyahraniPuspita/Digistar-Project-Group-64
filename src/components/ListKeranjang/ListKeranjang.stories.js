import { ListKeranjang } from ".";

export default {
  title: "Components/ListKeranjang",
  component: ListKeranjang,
  argTypes: {
    varian: {
      options: ["off", "on", "hover"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    varian: "off",
    className: {},
    chipText: "WEBINAR",
    frame: "https://c.animaapp.com/Mj45bpJj/img/frame-37299.svg",
    line: "https://c.animaapp.com/Mj45bpJj/img/line-16.svg",
    elementPrakerja: "https://c.animaapp.com/Mj45bpJj/img/4832-prakerja-wartawan-thumbnail---343-x-179-4-3@2x.png",
    star: "https://c.animaapp.com/Mj45bpJj/img/star-30-3@2x.png",
    img: "https://c.animaapp.com/Mj45bpJj/img/star-30-3@2x.png",
    star1: "https://c.animaapp.com/Mj45bpJj/img/star-28-3@2x.png",
    star2: "https://c.animaapp.com/Mj45bpJj/img/star-30-3@2x.png",
    star3: "https://c.animaapp.com/Mj45bpJj/img/star-30-3@2x.png",
  },
};