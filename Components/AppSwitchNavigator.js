import * as React from 'react';
import { createSwitchNavigator } from 'react-navigation'
import { AppTabNavigator } from './AppTab'
import { DrawerNav } from './DrawerNav'

export const AppSwitchNavigator = createSwitchNavigator({
 
 Drawer: {

  screen: DrawerNav

 },

},
)