import { Text, View } from "react-native";

export default function TabOneScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="h-16 w-16 rounded-xl bg-emerald-500 mb-4" />
      <Text className="text-xl font-semibold">Tailwind + NativeWind OK</Text>
    </View>
  );
}
