import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const TaskCategory = props => {
  return (
    <Wrapper>
      <Text style={{color: '#949fc6', fontSize: 15, fontWeight: '500'}}>
        {props.numberOfTasks} tasks
      </Text>
      <Text
        style={{
          color: '#000e47',
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 5,
        }}>
        {props.categoryName}
      </Text>
      <OuterProgress>
        <InnerProgress categoryColor={props.categoryColor}></InnerProgress>
      </OuterProgress>
    </Wrapper>
  );
};

export default TaskCategory;

const Wrapper = styled.View`
  width: 230px;
  box-shadow: 0px 2px 4px #eff3ff;
  elevation: 4;
  height: 120px;
  border-radius: 30px;
  background-color: white;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 25px;
  shadow-opacity: 1;
  margin-right: 15px;
`;

const OuterProgress = styled.View`
  height: 3px;
  background-color: #ebeefe;
  width: 100%;
  border-radius: 1.5px;
  margin-top: 10px;
`;

const InnerProgress = styled.View`
  height: 100%;
  background-color: ${props =>
    props.categoryColor ? props.categoryColor : '#ebeefe'};
  width: 50%;
  border-radius: 1.5px;
`;
