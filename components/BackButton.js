import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components';

const BackButton = props => {
  return (
    <Wrapper onPress={props.onPress}>
      <Image
        source={require('../assets/images/back-100.png')}
        style={{height: 30, width: 30}}
      />
    </Wrapper>
  );
};

export default BackButton;

const Wrapper = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
`;
