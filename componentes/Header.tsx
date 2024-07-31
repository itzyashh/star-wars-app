import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/constants/Style'

type HeaderProps = {
    title: string
    }

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <View>
      <Text style={GlobalStyles.header}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})