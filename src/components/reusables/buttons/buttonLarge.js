import React, { Component } from 'react';
import {Image,StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native';

/** HOW TO USE 
 *  1. Import this component to the page you desired
 *  2. Received Props custom boolean, side boolean, color (red, green,yellow)*required
*/

export default class buttonLarge extends Component {
    constructor(props){
      super(props);
    }
    onPress=()=>{
      alert('owch')
    }
    stylingBtn = () => {
      if(this.props.disabled){
        return styles.btnSizeGrey
      }else if(this.props.color == 'red'){
        return styles.btnSizeRed
      }else{
        return styles.btnSizeGreen
      }
    }

    render() {
      const { disabled } = this.props
        if(this.props.custom == false && this.props.side == false){
            return (
              <View style={styles.btnContainer}>
                <TouchableNativeFeedback>
                  <View style={styles.btnSizeRed}>
                    <Text style={styles.btnText}>{this.props.title}</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            );
        }
        else if(this.props.custom == true  && this.props.side == false){
            return (
              <View style={styles.btnContainer}>
                <TouchableNativeFeedback>
                  <View style={this.props.color=="yellow"? styles.btnSizeYellow:styles.btnSizeGreenCustom}>
                    <View style={styles.btnCustomContainer}>
                      {this.props.color!="yellow"?<Text style={styles.btnText}>{this.props.title}</Text>:null}
                      <Image 
                        source={this.props.color=="yellow"? require('../../../assets/images/add_timer.png'):require('../../../assets/images/arrow_right.png')}
                        style={this.props.color=="yellow"? styles.btnImgYellow:styles.btnImgSize}
                        resizeMode={'contain'}
                      />
                      {this.props.color=="yellow"?<Text style={styles.btnText}>{this.props.title}</Text>:null}
                    </View>
                  </View>
                </TouchableNativeFeedback>
              </View>
            );
        }
        else if(this.props.custom == true && this.props.side == true){
            return (
              <View style={styles.btnContainer}>
                <TouchableNativeFeedback>
                  <View style={this.props.color=="green" ? styles.btnSizeGreenCustLeft:styles.btnSizeRedCustLeft}>
                    <View style={styles.btnCustomContainer}>
                      <View style={this.props.color=="green" ? styles.btnSizeGreenLeftContainer:styles.btnSizeRedLeftContainer}>
                        <View style={this.props.color=="green" ? styles.btnSizeGreenLeft: styles.btnSizeRedLeft}>
                          <Image
                            source={require('../../../assets/images/arrow_slim_right.png')}
                            style={styles.btnImgSize}
                            resizeMode={'contain'}
                          />
                        </View>
                      </View>
                      <View style={styles.btnTextRight}>
                        <Text style={styles.btnText}>{this.props.title}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableNativeFeedback>
              </View>
            );
        }
    }
}

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
  },
  /** Button Red Color */
  btnSizeRed: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor:'#4d80e4',
    borderRadius: 20,
    height: 55,
    justifyContent: 'center',
  },
  btnSizeRedCustLeft: {
    alignItems: 'flex-start',
    backgroundColor: '#F74348',
    borderRadius: 5,
    height: 55,
    justifyContent: 'flex-start',
  },
  btnSizeRedLeft: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSizeRedLeftContainer: {
    flex: 0.25,
    alignItems: 'center',
    backgroundColor: '#E31527',
    borderRadius: 5,
    height: 55,
  },

/** Button Green Color */
  btnSizeGreen: {
    alignItems: 'center',
    backgroundColor: '#5DBE2F',
    borderRadius: 5,
    height: 55,
    justifyContent: 'center',
  },
  btnSizeGreenCustLeft: {
    alignItems: 'flex-start',
    backgroundColor: '#5DBE2F',
    borderRadius: 5,
    height: 55,
    justifyContent: 'flex-start',
  },
  btnSizeGreenLeft: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSizeGreenLeftContainer: {
    flex: 0.25,
    alignItems: 'center',
    backgroundColor: '#48A01E',
    borderRadius: 5,
    height: 55,
  },
  btnSizeGreenCustom: {
    alignItems: 'center',
    backgroundColor: '#5DBE2F',
    borderRadius: 5,
    height: 55,
    justifyContent: 'center',
    shadowColor: '#A5A5A5',
    shadowOpacity: 0.58,
    elevation: 2,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 12},
  },

  /** Button Yellow Color */
  btnSizeYellow: {
    alignItems: 'center',
    backgroundColor: '#FF9010',
    borderRadius: 5,
    height: 55,
    justifyContent: 'center',
    shadowColor: '#A5A5A5',
    shadowOpacity: 0.58,
    elevation: 4,
    shadowRadius: 16,
    shadowOffset: {width: 0, height: 12},
  },
  btnCustomContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnImgYellow: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  btnImgSize: {
    width: 25,
    height: 25,
  },
  btnTextRight: {
    alignItems:'center',
    flex:1,
    justifyContent:'center',

  },
  btnText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
    letterSpacing: 1,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#4d80e4',
    letterSpacing:2,
  },
  /**Button Grey */
  btnSizeGrey: {
    alignItems: 'center',
    backgroundColor: '#B5B5B5',
    borderWidth:1,
    borderColor:'#737373',
    borderRadius: 5,
    height: 55,
    justifyContent: 'center',
    shadowColor: '#A5A5A5',
    shadowOpacity: 0.58,
    elevation: 4,
    shadowRadius: 16,
    shadowOffset: {width: 0, height: 12},
  },
  btnTextDisable:{
    fontFamily: 'Nunito-Regular',
    fontSize: 15,
    letterSpacing: 1.2,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#363636',
  }
});