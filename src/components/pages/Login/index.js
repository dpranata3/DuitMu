import React, { Component } from 'react'
import { Text, View, StyleSheet,Dimensions } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

import LoginHeader from './loginHeader'
import LoginForm from './loginForm'

const {width,height} = Dimensions.get('window')

export class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <LoginHeader />
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
        <View style={styles.footerContainer} />
      </View>
    );
  }
}

export default index

const styles = StyleSheet.create({
  container:{
    width:width,
    height:height,
    flexDirection: 'column',
    backgroundColor:'#FFFFFF'
  },
  headerContainer: {
    flex: 1,
    backgroundColor:'#4d80e4',
    borderTopLeftRadius:250,
  },
  formContainer: {
    flex: 1,
    backgroundColor:'#4d80e4',
    padding:5
  },
  footerContainer:{
    flex: 1,
    backgroundColor:'#4d80e4',
  },
  divider: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  dividerContain:{
    height:5
  },
})