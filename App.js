import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { StyleSheet, Text, View, Icon } from 'react-native'
import Circle from './screens/circle'
import Square from './screens/square'
import Triangle from './screens/triangle'
import circleIcon from './assets/circle.png'

const NavigationApp = createBottomTabNavigator ({
  Circle: { 
    screen: Circle,
  },
  Square: {screen: Square},
  Triangle: {screen: Triangle}
})

const App = createAppContainer(NavigationApp)

export default App

const styles = StyleSheet.create ({
  container: {

  }
})
