import { createDrawerNavigator } from 'react-navigation-drawer'
import CustomSideDrawer from './CustomSideDrawer'
import {AppTabNavigator} from './AppTab'
import {AppSwitchNavigator} from './AppSwitchNavigator'
import Home from '../Screens/Home'

export const DrawerNav = createDrawerNavigator({

 Home: {

  screen:AppTabNavigator

 },
},
 {

  contentComponent: CustomSideDrawer

 },
 {

 initilRouteName: 'Home'

 }
)