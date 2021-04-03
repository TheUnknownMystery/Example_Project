import * as React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Settings from '../Screens/Settings'
import Home from '../Screens/Home'

export const AppTabNavigator = createBottomTabNavigator({

 Home: {

  screen: Home

 },

 Settings: {

  screen: Settings

 },
})
