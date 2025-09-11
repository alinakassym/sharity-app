import { ScrollView, View } from "react-native";
import Colors from "@/constants/Colors";
import { useTheme } from "@/contexts/ThemeContext";
import { Text } from "@/components/ui/text";
import LocationHeader from "@/components/LocationHeader";
import Carousel from "@/components/Carousel";
import { banners } from "@/mocks/banners";
import MenuButtons from "@/components/MenuButtons";

const HomeScreen = () => {
  const { colorScheme } = useTheme();
  return (
    <View
      className="flex-1"
      style={{
        backgroundColor: Colors[colorScheme ?? "light"].surfaceColor,
      }}
    >
      <LocationHeader location={"Астана"} />
      <ScrollView className="flex-1 gap-6">
        <Carousel items={banners} />
        <MenuButtons />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
