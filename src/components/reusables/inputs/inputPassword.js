import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

/** HOW TO USE 
 *  1. Import this component to the page you desired
 *  2. Received Props Title(Optional) and Placeholder
*/

export default class inputPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      showPassword: true,
      isFocused: false,
    };
  }

  getValue() {
    return this.state.password;
  }

  changePwdType = () => {
    let newState;
    if (this.state.showPassword) {
      newState = {
        showPassword: false,
        password: this.state.password,
      };
    } else {
      newState = {
        showPassword: true,
        password: this.state.password,
      };
    }
    this.setState(newState);
  };

  handlePassword = password => {
    let newState = {
      showPassword: this.state.showPassword,
      password: password,
    };
    this.setState(newState);
  };

  onFocusChange() {
    this.setState({isFocused: !this.state.isFocused});
  }

  render() {
    return (
      <View
        style={
          this.state.isFocused
            ? styles.txtContainerFocused
            : styles.txtContainer
        }>
        <View style={styles.labelContainer}>
          <Text style={styles.txtTitle}>{this.props.title}</Text>
        </View>
        <View style={styles.passIconContainer}>
          <View style={styles.passInput}>
            <TextInput
              autoCapitalize="none"
              onBlur={() => this.onFocusChange()}
              onChangeText={(password)=>this.setState({password})}
              onFocus={() => this.onFocusChange()}
              placeholder={this.props.placeholder}
              secureTextEntry={this.state.showPassword}
              value={this.state.password}
            />
          </View>
          <TouchableWithoutFeedback onPress={this.changePwdType}>
            {this.state.isFocused ? <Image
              source={
                this.state.showPassword == true
                  ? require('../../../assets/images/eye_hide_red.png')
                  : require('../../../assets/images/eye_on_red.png')
              }
              style={styles.iconEye}
              resizeMode={'contain'}
            /> : <Image
            source={
              this.state.showPassword == true
                ? require('../../../assets/images/eye_hide_black.png')
                : require('../../../assets/images/eye_on_black.png')
            }
            style={styles.iconEye}
            resizeMode={'contain'}
          />}
            
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  txtContainer: {
    flex:1,
    marginTop: 12,
    fontSize: 12,
    justifyContent: 'flex-start',
    borderBottomWidth: 2,
    borderColor: '#A5A5A5',
  },
  txtContainerFocused: {
    flex: 1,
    marginTop: 12,
    fontSize: 12,
    justifyContent: 'flex-start',
    borderBottomWidth: 2,
    borderColor: '#4d80e4',
  },
  labelContainer: {
    flex: 0.3,
  },
  passIconContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  passInput: {
    flex: 1,
  },
  iconEye: {
    marginTop: 10,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  txtTitle: {
    fontSize: 15,
    fontFamily: 'Nunito-Regular',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#4d80e4',
  },
});
