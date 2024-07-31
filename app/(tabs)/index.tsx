import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '@/componentes/Header'
import Colors from '@/constants/Colors'

const Page = () => {
  return (
    <View style={styles.container}>
      <Header title="Home" />
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
})