import React from 'react';
import styled from 'styled-components/native';
import {Text, Image, TouchableOpacity} from 'react-native';

const SideMenuItem = ({imageSource, menuText, clicked}) => {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}
      onPress={clicked}>
      <Image source={imageSource} style={{marginRight: 20}} />
      <Text style={{color: 'white', fontSize: 15}}>{menuText}</Text>
    </TouchableOpacity>
  );
};

export default SideMenuItem;
