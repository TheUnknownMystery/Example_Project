import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {AppSwitchNavigator} from './Components/AppSwitchNavigator'

export default class App extends React.Component {

  render() {
    return (

      <AppContainer/>

    )
  }
}

const AppContainer = createAppContainer(AppSwitchNavigator)