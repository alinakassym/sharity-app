import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import Colors from "@/constants/Colors";
import { useTheme } from "@/contexts/ThemeContext";
import { Text } from "@/components/ui/text";

interface MenuButtonProps {
  image: any;
  title: string;
  onPress?: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ image, title, onPress }) => {
  const { colorScheme } = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{ alignItems: "center", justifyContent: "center", gap: 8 }}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 15,
        }}
      >
        <Image
          source={image}
          style={{ width: 70, height: 70, borderRadius: 15 }}
        />
      </View>
      <Text style={{ color: Colors[colorScheme ?? "light"].text }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const MenuButtons: React.FC = () => {
  const { colorScheme } = useTheme();

  const menuItems = [
    {
      image: require("@/assets/images/menu-img1.png"),
      title: "КЛАССЫ",
      onPress: () => console.log("Classes pressed"),
    },
    {
      image: require("@/assets/images/menu-img2.jpg"),
      title: "СОБЫТИЯ",
      onPress: () => console.log("Events pressed"),
    },
    {
      image: require("@/assets/images/menu-img3.png"),
      title: "МАГАЗИН",
      onPress: () => console.log("Store pressed"),
    },
  ];

  return (
    <View
      className="my-4 p-6"
      style={{
        flexDirection: "row",
        justifyContent: "center",
        gap: 32,
        backgroundColor:
          Colors[colorScheme ?? "light"].background === "#FFFFFF"
            ? "#2C2C54"
            : Colors[colorScheme ?? "light"].background,
      }}
    >
      {menuItems.map((item, index) => (
        <MenuButton
          key={index}
          image={item.image}
          title={item.title}
          onPress={item.onPress}
        />
      ))}
    </View>
  );
};

export default MenuButtons;
