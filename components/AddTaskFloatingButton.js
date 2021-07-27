import React from 'react';
import styled from 'styled-components';
import {TouchableOpacity, Dimensions} from 'react-native';

const screenHeight = Dimensions.get('window').height;

const AddTaskFloatingButton = () => {
  return (
    <Wrapper>
      <TouchableOpacity>
        <FloatingButtonImage source={require('../assets/images/plus-25.png')} />
      </TouchableOpacity>
    </Wrapper>
  );
};

export default AddTaskFloatingButton;

const Wrapper = styled.View`
  height: 56px;
  width: 56px;
  border-radius: 28px;
  elevation: 3;
  box-shadow: 0px 2px 6px #b4c6e5;
  background-color: #0375ff;
  padding-top: 16px;
  padding-left: 16px;
  position: absolute;
  bottom: 8px;
  right: 12px;
  z-index: 10;
`;

const FloatingButtonImage = styled.Image``;
