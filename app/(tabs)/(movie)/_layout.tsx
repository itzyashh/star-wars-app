import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StackHeaderOptions } from '@/constants/Style'
import Header from '@/componentes/Header'

const Layout = () => {
  return (
    <Stack
        // @ts-ignore
        screenOptions={StackHeaderOptions}
     >
        <Stack.Screen
         name="index" />
    </Stack>
  )
}

export default Layout