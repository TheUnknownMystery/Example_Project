import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer'

export default class CustomSideDrawer extends React.Component {
 render() {
  return (
   <View style={{ flex: 1 }}>

    <View style={{ flex: 0.8, marginTop: 32  }}>

     <DrawerItems {...this.props}/>

    </View>

   </View>
  )
 }
}