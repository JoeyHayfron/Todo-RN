import React, {useState} from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import AuthButton from '../components/AuthButton';
import Loader from '../components/Loader';

const AuthenticationScreen = () => {
  const [testShow, setTestShow] = useState(false);
  const showLoader = () => {
    setTestShow(!testShow);
  };
  return (
    <Wrapper>
      <TouchableOpacity onPress={showLoader}>
        <Text>Click</Text>
      </TouchableOpacity>
      <Loader show={testShow} />
      {/* <AppLogo source={require('../assets/images/TaskTracker.png')} />
      <AuthButton
        text="Sign in with Google"
        imgSrc={`${require('../assets/images/google_icon.png')}`}
        textColor="#454445"
      />
      <AuthButton
        background="#1977f2"
        text="Sign in with Facebook"
        imgSrc={`${require('../assets/images/facebook_icon.png')}`}
        textColor="white"
      /> */}
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
