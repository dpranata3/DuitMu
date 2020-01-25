import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'

const {width,height} = Dimensions.get('window')

export class loginHeader extends Component {
  render() {
    return (
      <View style={styles.container}>      
          <Text style={styles.title}> DuitMu </Text>
          <Text style={styles.infoTxt}> Your Income Tracking Partner </Text>
      </View>
    );
  }
}

export default loginHeader

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 55,
    fontFamily: 'Nunito-Regular',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing:2,
    textShadowColor:'#2e279d',
    textShadowOffset:{width: 2, height: 1},
    textShadowRadius:2,
  },
  infoTxt:{
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing:1,
    textShadowColor:'#2e279d',
    textShadowOffset:{width: 2, height: 1},
    textShadowRadius:2,
  }
})
