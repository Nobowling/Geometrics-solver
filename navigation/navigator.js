import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import Circle from '../screens/circle.js'
import Square from '../screens/square.js'

export const Stacks = createStackNavigator({
    Circle: {
        screen: Circle,
    },
    Square: {
        screen: Square,
    }
});