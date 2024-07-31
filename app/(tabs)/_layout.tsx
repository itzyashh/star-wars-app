import { Tabs } from 'expo-router';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from '@/constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitle: '',
        headerStyle: {
          backgroundColor: Colors.black,
        },
        tabBarStyle: {
          backgroundColor: Colors.dark,
          borderBlockColor: 'transparent',
        },
        
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Movies',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="local-movies" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="favorite-border" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
