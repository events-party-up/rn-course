import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, Dimensions } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import backgroundImage from '../../assets/background.jpg';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

class AuthScreen extends Component {
  state = {
    styles: {
      pwContainerDirection: 'column',
      pwContainerJustifyContent: 'flex-start',
      pwWrapperWidth: '100%'
    }
  }

  constructor(props) {
    super(props);
    Dimensions.addEventListener('change', dims => {
      this.setState({
        styles: {
          pwContainerDirection: Dimensions.get('window').height > 500 ? 'column' : 'row',
          pwContainerJustifyContent: Dimensions.get('window').height > 500 ? 'flex-start' : 'space-between',
          pwWrapperWidth: Dimensions.get('window').height > 500 ? '100%' : '45%'
        }
      })
    })
  }

  loginHandler = () => {
    startMainTabs();
  }
  
  render() {
    let headingText = null;

    if (Dimensions.get('window').height > 500) {
      headingText =  (
        <MainText>
          <HeadingText>Please Log In</HeadingText>
        </MainText>
      );
    }
    return (
      <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
        <View style={styles.container}>
          {headingText}
          <ButtonWithBackground color="#29aaf4" onPress={() => alert("hello")}>Switch to Log In</ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Your Email Address" style={styles.input}/>
            <View style={{
              flexDirection: this.state.styles.pwContainerDirection,
              justifyContent: this.state.styles.pwContainerJustifyContent
            }}>
              <View style={{width: this.state.styles.pwWrapperWidth}}>
                <DefaultInput placeholder="Password" style={[styles.input, {borderColor: 'red'}]} />
              </View>
              <View style={{width: this.state.styles.pwWrapperWidth}}>
                <DefaultInput placeholder="Confirm Password" style={styles.input}/>
              </View>
            </View>
          </View>
          <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler}>Submit</ButtonWithBackground>
        </View>
      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundImage: {
    width: "100%",
    flex: 1
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: '#eee',
    borderColor: '#bbb' 
  },
  passwordContainer: {
    flexDirection: Dimensions.get('window').height > 500 ? 'column' : 'row',
    justifyContent: 'space-between'
  },
  passwordWrapper: {
    width: Dimensions.get('window').height > 500 ? "100%" : "45%"
  }
});

export default AuthScreen;