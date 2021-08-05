import React from 'react';
import styled from 'styled-components';
import {Text, Image} from 'react-native';

const SideMenuItem = ({imageSource, menuText, clicked}) => {
  return (
    <MenuItem onPress={clicked}>
      <Image source={imageSource} style={{marginRight: 20}} />
      <Text style={{color: 'white', fontSize: 15}}>{menuText}</Text>
    </MenuItem>
  );
};

export default SideMenuItem;

const MenuItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;
