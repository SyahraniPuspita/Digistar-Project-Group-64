import { BannerHome } from ".";

export default {
  title: "Components/BannerHome",
  component: BannerHome,
  argTypes: {
    varian: {
      options: ["new-features", "freemium", "student-kit", "pay-later"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    varian: "freemium",
    bannerAtas: "https://c.animaapp.com/IMLcrDb6/img/banner-atas-3.png",
  },
};