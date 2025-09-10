import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Text } from "@/components/ui/text";
import { useTheme } from "@/contexts/ThemeContext";
import Colors from "@/constants/Colors";

interface MenuButtonProps {
  image: any;
  title: string;
  onPress?: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ image, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} className="flex-1 items-center">
      <View className="w-20 h-20 rounded-2xl overflow-hidden mb-2">
        <Image source={image} className="w-full h-full" resizeMode="cover" />
      </View>
      <Text className="text-sm font-medium text-center text-white">
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
      className="mx-6 my-8 p-6 rounded-3xl"
      style={{
        backgroundColor:
          Colors[colorScheme ?? "light"].background === "#FFFFFF"
            ? "#2C2C54"
            : Colors[colorScheme ?? "light"].background,
      }}
    >
      <View className="flex-row justify-between items-center">
        {menuItems.map((item, index) => (
          <MenuButton
            key={index}
            image={item.image}
            title={item.title}
            onPress={item.onPress}
          />
        ))}
      </View>
    </View>
  );
};

export default MenuButtons;
