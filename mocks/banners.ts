import { ImageSourcePropType } from "react-native";

export type Banner = {
  id: string;
  title?: string;
  subtitle?: string;
  image: ImageSourcePropType; // require(...) or { uri }
  href?: string;
};

export const banners: Banner[] = [
  {
    id: "b1",
    title: "",
    subtitle: "",
    image: require("@/assets/images/banner1.jpg"),
  },
  {
    id: "b2",
    title: "Мячи от А до Я",
    image: require("@/assets/images/banner2.png"),
  },
];
