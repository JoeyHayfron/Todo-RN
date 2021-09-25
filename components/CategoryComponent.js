import React from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';

const platform = Platform.OS;
const CategoryComponent = props => {
  return (
    <CategoryWrapper color={props.categoryColor} onPress={props.onPress}>
      <CategoryName>{props.categoryName}</CategoryName>
    </CategoryWrapper>
  );
};

export default CategoryComponent;

const CategoryWrapper = styled.TouchableOpacity`
  background-color: ${props => (props.color ? props.color : '#e000ee')};
  height: 100px;
  width: 100%;
  border-radius: 30px;
  justify-content: center;
  padding-left: 20px;
  elevation: 4;
  box-shadow: 0px 2px 4px  rgba(99, 100, 101, 0.4)
  margin-bottom: 25px;
`;

const CategoryName = styled.Text`
  color: white;
  font-weight: ${platform === 'ios' ? 600 : 'bold'};
  font-size: 30px;
`;
