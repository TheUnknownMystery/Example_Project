import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default class Home extends React.Component {

 render() {
  return (

   <View style={styles.TextStyle}>

    This is HomePage.js

    <View style={{ alignSelf: 'center' }}>

     <TouchableOpacity style={{ backgroundColor: 'blue', borderRadius: 10, borderWidth: 5, borderColor: 'darkblue' }} onPress={() => {

     this.props.navigation.toggleDrawer()

     }}>

      <Text style={{ alignSelf: 'center' }}>Open Side drawer</Text>

     </TouchableOpacity>

    </View>

   </View>

  )
 }
}

const styles = StyleSheet.create({

 TextStyle: {

  alignSelf: 'center',
  marginTop: 300

 }
})