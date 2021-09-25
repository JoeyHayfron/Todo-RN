import React, {useState, useEffect} from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import AuthButton from '../components/AuthButton';
import Loader from '../components/Loader';
import {
  onFacebookButtonPress,
  onGoogleButtonPress,
  createUserDocument,
  getCurrentUser,
} from '../services/firebase';

const os = Platform.OS;
const AuthenticationScreen = props => {
  useEffect(() => {
    if (getCurrentUser()) {
      props.navigation.navigate('Home');
    }
  }, []);
  return (
    <Wrapper>
      <AppLogo source={require('../assets/images/TaskTracker.png')} />
      <AuthButton
        text="Sign in with Google"
        imgSrc={`${require('../assets/images/google_icon.png')}`}
        textColor="#454445"
        onPress={() => {
          onGoogleButtonPress().then(res =>
            createUserDocument(res, () => {
              props.navigation.navigate('Home');
            }),
          );
        }}
      />

      <AuthButton
        background="#1977f2"
        text="Sign in with Facebook"
        imgSrc={`${require('../assets/images/facebook_icon.png')}`}
        textColor="white"
        onPress={() =>
          onFacebookButtonPress().then(res =>
            createUserDocument(res, () => {
              props.navigation.navigate('Home');
            }),
          )
        }
      />
    </Wrapper>
  );
};

export default AuthenticationScreen;

const Wrapper = styled.SafeAreaView`
  padding-left: 20px;
  padding-right: 20px;
  flex: 1;
  justify-content: center;
  background-color: #fefefe;
`;

const AppLogo = styled.Image`
  height: 200px;
  width: 300px;
  align-self: center;
`;
