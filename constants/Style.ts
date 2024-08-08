import { StyleSheet, ViewStyle } from "react-native";
import Colors from "./Colors";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationOptions } from "react-native-screens/lib/typescript/native-stack/types";

export const GlobalStyles = StyleSheet.create({
    header:{
        color: Colors.white,
        fontSize: 34,
        fontWeight: 'bold',
    },
    stackHeader:{
        backgroundColor: Colors.black,
    },
    tabbar:{
        backgroundColor: Colors.black,
    },
    headerContainer:{
        paddingLeft: 20,
        paddingBottom: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.white,
    },
    screenContainer:{
        flex: 1,
        backgroundColor: Colors.black,
        paddingHorizontal: 20,
    },
})

export const StackTabBarOptions: BottomTabNavigationOptions = {
    headerTitle: '',
    headerStyle: {
      backgroundColor: Colors.black,
    },
    tabBarStyle: {
      backgroundColor: Colors.dark,
      borderBlockColor: 'transparent',
      height: 90,
    },
    
    }

export const StackHeaderOptions: NativeStackNavigationOptions = {
    headerTitle: '',
    headerStyle: {
      backgroundColor: Colors.black,
    },
}

