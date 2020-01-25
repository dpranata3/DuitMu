import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import InputText from '../../reusables/inputs/inputText';
import InputPassword from '../../reusables/inputs/inputPassword';
import BtnLg from '../../reusables/buttons/buttonLarge'

export class loginForm extends Component {

  constructor(props) {
    super(props)

    this.usernameInput = React.createRef()
    this.passwordInput = React.createRef()
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.secondContainer}>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <InputText
                placeholder="Username"
                title="Username"
                ref={this.usernameInput}
              />
              <InputPassword
                placeholder="Password"
                title="Password"
                ref={this.passwordInput}
              />
            </View>
            <View style={styles.componentMargin}>
              <BtnLg
                color="red"
                custom={false}
                side={false}
                title="Login"
                onPress={() => this.handleSignIn()}
                disabled={this.props.isLoading}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default loginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    borderRadius:30
  },
  secondContainer: {
    flex: 1,
    paddingHorizontal:25,
    paddingVertical:20
  },
  formContainer: {
    flex:1,
  },
  inputContainer: {
    flex: 0.7,
    justifyContent: 'flex-start',
  },
  componentMargin: {
    marginTop: 10,
  },
  forgotContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
  forgotTxt: {
    fontSize: 15,
    fontFamily: 'Nunito-Regular',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#4d80e4',
  },
});

