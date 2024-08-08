import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import Header from '@/componentes/Header'
import { GlobalStyles } from '@/constants/Style'

const Page = () => {
  const all = useLocalSearchParams()
  console.log(all, 'all') 
  return (
    <View style={GlobalStyles.screenContainer}>
      <Header title="Detail" />
    </View>
  )
}

export default Page

const styles = StyleSheet.create({

})