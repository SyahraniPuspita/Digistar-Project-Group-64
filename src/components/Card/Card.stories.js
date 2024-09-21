import { Card } from ".";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    variasi: {
      options: ["regular-freemium", "student-freemium", "regular-paid", "mitra", "student-paid"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    variasi: "regular-freemium",
    className: {},
    rectangle: "/img/rectangle-8-8.png",
    text: "Nama Kursus Pijar Apa Saja Terserah",
    frameClassName: {},
    group: "/img/group-2-7.png",
    vector: "/img/vector-1-4.svg",
    rectangleClassName: {},
    img: "/img/rectangle-8-2.png",
    text1: "Nama Mitra",
    text2: "999 Kursus",
  },
};
