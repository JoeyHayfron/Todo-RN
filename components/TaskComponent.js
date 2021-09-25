import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {Text, TouchableOpacity, Animated} from 'react-native';

const Task = ({isCompleted, categoryColor, checkTask, title, date}) => {
  const opacity = new Animated.Value(0);

  useEffect(() => {
    if (isCompleted) {
      Animated.spring(opacity, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(opacity, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    }
  }, [isCompleted]);

  return (
    <Wrapper>
      <TouchableOpacity onPress={checkTask}>
        <Content>
          <OuterRadio isCompleted={isCompleted} categoryColor={categoryColor}>
            <AnimatedCheck
              style={{opacity: opacity}}
              isCompleted={isCompleted}
              source={require('../assets/images/checkmark-32.png')}
            />
          </OuterRadio>
          <TodoText isCompleted={isCompleted}>
            {title ? title : 'Complete Todo App'}
          </TodoText>
          {date ? <DateText>{date}</DateText> : null}
        </Content>
      </TouchableOpacity>
    </Wrapper>
  );
};

export default Task;

const Wrapper = styled.View`
  background-color: #ffffff;
  width: 100%;
  border-radius: 20px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 27px;
  height: 80px;
  margin-bottom: 20px;
`;

const OuterRadio = styled.View`
  height: 25px;
  width: 25px;
  opacity: ${props => (props.isCompleted ? 0.4 : 1)};
  background-color: ${props => (props.isCompleted ? '#0c1f61' : 'transparent')};
  border: 2px solid
    ${props => (props.isCompleted ? '#0c1f61' : props.categoryColor)};
  padding-top: 1.4px;
  padding-left: 1.4px;
  border-radius: 12.5px;
  margin-right: 20px;
  z-index: -1;
`;

const InnerRadio = styled.Image`
  height: 18px;
  width: 18px;
  border-radius: 9px;
  z-index: 3;
`;

const TodoText = styled.Text`
  font-size: 16;
  color: #0d1a3c;
  text-decoration-line: ${props =>
    props.isCompleted ? 'line-through' : 'none'};
  text-decoration-style: solid;
  text-decoration-color: #000;
`;

const AnimatedCheck = Animated.createAnimatedComponent(InnerRadio);

const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

const DateText = styled.Text`
  font-size: 10px;
  position: absolute;
  bottom: -20;
  right: -10;
`;
