import React from 'react';
import {Image, Text} from 'react-native';
import styled from 'styled-components/native';

const AddButton = props => {
  return (
    <TaskButton onPress={props.onPress}>
      <Text style={{marginRight: 10, color: 'white'}}>{props.text}</Text>
      {props.image ? (
        <Image
          source={require('../assets/images/collapse_arrow-50.png')}
          style={{width: 18, height: 18}}
        />
      ) : null}
    </TaskButton>
  );
};

export default AddButton;

const TaskButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #0375ff;
  flex-direction: row;
  min-width: 140px;
  padding: 15px 20px;
  border-radius: 50px;
  align-items: center;
`;
