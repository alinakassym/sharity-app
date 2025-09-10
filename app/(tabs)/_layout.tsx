import React from 'react';
import { Tabs } from "expo-router";

import Colors from "@/constants/Colors";
import { useTheme } from "@/contexts/ThemeContext";
import { HomeIcon } from "@/components/icons/HomeIcon";
import { AddIcon } from "@/components/icons/AddIcon";
import { UserIcon } from "@/components/icons/UserIcon";
import { Text } from "@/components/ui/text";

export default function TabLayout() {
  const { colorScheme } = useTheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].background,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Главная",
          tabBarLabel: ({ color }) => (
            <Text className="text-sm font-medium" style={{ color }}>
              Главная
            </Text>
          ),
          tabBarIcon: ({ color }) => <HomeIcon size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="add-item"
        options={{
          tabBarLabel: ({ color }) => (
            <Text className="text-sm font-medium" style={{ color }}>
              Добавить
            </Text>
          ),
          tabBarIcon: ({ color }) => <AddIcon size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: ({ color }) => (
            <Text className="text-sm font-medium" style={{ color }}>
              Профиль
            </Text>
          ),
          tabBarIcon: ({ color }) => <UserIcon size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
