import React from 'react';
import {Text, Image} from 'react-native';
import styled from 'styled-components';

const CategoryComponent = props => {
  return (
    <CategoryWrapper onPress={props.clicked}>
      <OuterColorView color={props.color}>
        <InnerColorView color={props.color}></InnerColorView>
      </OuterColorView>
      <Text style={{marginRight: 10}}>{props.name}</Text>
      {props.image ? (
        <Image
          source={require('../assets/images/expand_arrow-50.png')}
          style={{height: 18, width: 18}}
        />
      ) : null}
    </CategoryWrapper>
  );
};

export default CategoryComponent;

const CategoryWrapper = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px 20px;
  border: 1px solid #edf0fe;
  border-radius: 50px;
  align-items: center;
  margin-bottom: 10px;
`;

const OuterColorView = styled.View`
  height: 25px;
  width: 25px;
  border-radius: 12.5px;
  background-color: transparent;
  border: 2px solid ${props => (props.color ? props.color : '#0574fe')};
  padding-top: 1.9px;
  padding-left: 1.9px;
  margin-right: 10px;
`;

const InnerColorView = styled.View`
  height: 17px;
  width: 17px;
  background-color: ${props => (props.color ? props.color : '#0574fe')};
  border-radius: 8.5px;
`;
