import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default class Settings extends React.Component {

 render() {
  return (

   <View style={styles.TextStyle}>
                                    
    This is Settings
                                                          
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