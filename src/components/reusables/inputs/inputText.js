import React, { Component } from 'react';
import {Image,Text, TextInput, View, StyleSheet} from 'react-native';

/** HOW TO USE 
 *  1. Import this component to the page you desired
 *  2. Received Props Title(Optional) and Placeholder, keyboardType (numeric/phone-pad)*optional, icon(boolean)
*/

export default class inputText extends Component {
  constructor(props){
    super(props);
    this.state={
      text:'',
      isFocused: false
    }
  }
  
  onFocusChange() {
    this.setState({ isFocused: !this.state.isFocused });
  }
  
  getValue = () => {
    return this.state.text;
  }

  setValue = (itemValue) => {
    this.setState({text: itemValue})
  }
  
  render() {
    return (
      <View style={styles.txtContainer}>
        {this.props.title != '' ? (
          <View style={styles.labelContainer}>
            <Text style={styles.txtTitle}>{this.props.title}</Text>
          </View>
        ) : null}
        {this.props.icon !== true ? (
          <TextInput
            maxLength={this.props.maxLength ? this.props.maxLength : null}
            autoCapitalize="none"
            onBlur={() => this.onFocusChange()}
            onChangeText={text => this.setState({text})}
            onFocus={() => this.onFocusChange()}
            placeholder={this.props.placeholder}
            keyboardType={
              this.props.keyboardType ? this.props.keyboardType : null
            }
            style={
              this.state.isFocused ? styles.txtInputFocused : styles.txtInput
            }
            value={this.state.text}
          />
        ) : (
          /**using phone Icon */
          <View style={this.state.isFocused ? styles.txtIconContainerFocus: styles.txtIconContainer}>
            <View style={styles.imgContainer}>
              <Image
                style={styles.imgSize}
                source={require('../../../assets/images/ic_call.png')}
                resizeMode={'contain'}
              />
            </View>
            <View style={styles.txtContainer}>
              <TextInput
                maxLength={this.props.maxLength ? this.props.maxLength : null}
                autoCapitalize="none"
                onBlur={() => this.onFocusChange()}
                onChangeText={text => this.setState({text})}
                onFocus={() => this.onFocusChange()}
                placeholder={this.props.placeholder}
                keyboardType={
                  this.props.keyboardType ? this.props.keyboardType : null
                }
                value={this.state.text}
              />
            </View>
          </View>
        )}
      </View>
    );
      }
    }
    
    const styles = StyleSheet.create({
      txtContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection:'column'
      },
      labelContainer: {
        flex: 1,
      },
      txtTitle: {
        fontSize: 15,
        fontFamily: 'Nunito-Regular',
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#4d80e4',
      },
      txtInput: {
        borderBottomWidth:2,
        borderColor: '#A5A5A5',
      },
      txtInputFocused: {
        borderBottomWidth:2,
        borderColor: '#4d80e4',
      },
      txtIconContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        borderBottomWidth:2,
        borderColor:'#A5A5A5'
      },
      txtIconContainerFocus:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        borderBottomWidth: 2,
        borderColor: '#4d80e4',
      },
      imgContainer:{
        flex:0.07,
        paddingTop:2,
        alignItems:'flex-start',
        justifyContent:'center'
      },
      imgSize:{
        height:15,
        width:15
      }
    });
