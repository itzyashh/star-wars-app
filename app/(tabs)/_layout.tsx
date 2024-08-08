import { Tabs } from 'expo-router';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from '@/constants/Colors';
import {  StackTabBarOptions } from '@/constants/Style';

export default function TabLayout() {
  return (
    <Tabs screenOptions={StackTabBarOptions} >
      <Tabs.Screen
        name="(movie)"
        options={{
          title: 'Movies',
          headerShown: false,
          tabBarActiveTintColor: Colors.white,
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="local-movies" size={24} color="white" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Favorites',
          tabBarActiveTintColor: Colors.white,
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="favorite-border" size={24} color="white" />
          ),
        }}
      />
    </Tabs>
  );
}
