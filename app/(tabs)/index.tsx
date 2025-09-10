import { ScrollView, View } from "react-native";
import { Text } from "@/components/ui/text";
import Carousel from "@/components/Carousel";
import { banners } from "@/mocks/banners";

const HomeScreen = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <Carousel items={banners} />
      <View className="px-6 py-8">
        <Text className="text-2xl font-bold mb-6">Главная</Text>

        <View className="bg-gray-50 p-4 rounded-lg mb-4">
          <Text className="text-lg font-semibold mb-2">Добро пожаловать!</Text>
          <Text className="text-gray-600">
            Здесь будет основной контент приложения
          </Text>
        </View>

        <View className="bg-blue-50 p-4 rounded-lg mb-4">
          <Text className="text-lg font-semibold mb-2 text-blue-900">
            Новости
          </Text>
          <Text className="text-blue-800">Актуальные новости и обновления</Text>
        </View>

        <View className="bg-green-50 p-4 rounded-lg">
          <Text className="text-lg font-semibold mb-2 text-green-900">
            Активность
          </Text>
          <Text className="text-green-800">
            Последние активности пользователей
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
