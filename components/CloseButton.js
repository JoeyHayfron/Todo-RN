import React from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components';

const platform = Platform.OS;

const CloseButton = props => {
  return (
    <Wrapper onPress={props.onPress}>
      <CloseImage source={require('../assets/images/multiply-25.png')} />
    </Wrapper>
  );
};

export default CloseButton;

const Wrapper = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #e1e4f6;
  padding-top: 8px;
  padding-left: 8px;
  position: absolute;
  right: 14px;
  top: ${platform == 'ios' ? 45 : 8}px;
`;

const CloseImage = styled.Image`
  height: 20px;
  width: 20px;
`;
