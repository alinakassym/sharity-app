import React from "react";
import { View } from "react-native";
import Colors from "@/constants/Colors";
import { useTheme } from "@/contexts/ThemeContext";
import { Text } from "@/components/ui/text";
import { LocationIcon } from "@/components/icons/LocationIcon";

interface LocationHeaderProps {
  location: string;
}

const LocationHeader: React.FC<LocationHeaderProps> = ({ location }) => {
  const { colorScheme } = useTheme();
  return (
    <View
      className="flex-row items-center justify-center py-4 gap-1"
      style={{
        paddingTop: 48,
      }}
    >
      <LocationIcon size={16} color={Colors[colorScheme ?? "light"].tint} />
      <Text
        className="text-sm"
        style={{ color: Colors[colorScheme ?? "light"].text }}
      >
        {location}
      </Text>
    </View>
  );
};

export default LocationHeader;
