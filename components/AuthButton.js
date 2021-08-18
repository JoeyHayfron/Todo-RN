import React from 'react';
import styled from 'styled-components';
import {Image, Text} from 'react-native';

const AuthButton = props => {
  return (
    <Wrapper background={props.background}>
      <Image
        source={props.imgSrc}
        style={{width: 35, height: 35, marginRight: 30}}
      />
      <Text style={{fontWeight: 'bold', color: props.textColor}}>
        {props.text}
      </Text>
    </Wrapper>
  );
};

export default AuthButton;

const Wrapper = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  background: red;
  align-self: center;
  border-radius: 100px;
  margin-top: 25px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  background-color: ${props => (props.background ? props.background : 'white')};
  elevation: 7;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
`;
