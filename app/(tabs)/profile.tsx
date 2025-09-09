import { ScrollView, View, TouchableOpacity } from 'react-native';
import { Text } from '@/components/ui/text';
import { UserIcon } from '@/components/icons/UserIcon';

export default function ProfileScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="px-6 py-8">
        <View className="items-center mb-8">
          <View className="w-24 h-24 bg-gray-200 rounded-full items-center justify-center mb-4">
            <UserIcon size={48} color="#6b7280" />
          </View>
          <Text className="text-2xl font-bold mb-2">Иван Иванов</Text>
          <Text className="text-gray-600">ivan@example.com</Text>
        </View>
        
        <View className="gap-4">
          <TouchableOpacity className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <Text className="text-lg font-semibold mb-1">Мои посты</Text>
            <Text className="text-gray-600">Управление вашими публикациями</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <Text className="text-lg font-semibold mb-1">Настройки</Text>
            <Text className="text-gray-600">Изменить настройки аккаунта</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <Text className="text-lg font-semibold mb-1">Уведомления</Text>
            <Text className="text-gray-600">Управление уведомлениями</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <Text className="text-lg font-semibold mb-1">Помощь</Text>
            <Text className="text-gray-600">Часто задаваемые вопросы</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="bg-red-50 p-4 rounded-lg border border-red-200 mt-4">
            <Text className="text-lg font-semibold mb-1 text-red-900">Выйти</Text>
            <Text className="text-red-700">Выход из аккаунта</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}