import React, {useRef, useEffect} from 'react';
import styled from 'styled-components/native';
import {Text, Animated} from 'react-native';

const Loader = props => {
  const opacityRef = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (props.show) fadeIn();
    else fadeOut();
  }, [props.show]);

  const fadeIn = () => {
    Animated.timing(opacityRef, {
      toValue: 1,
      duration: 1000,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacityRef, {
      toValue: 0,
      duration: 600,
    }).start();
  };

  const startSpinning = () => {};
  return (
    <AnimatedWrapper style={{opacity: opacityRef}}>
      <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
        Loading...
      </Text>
      <AnimatedSpinner></AnimatedSpinner>
    </AnimatedWrapper>
  );
};

export default Loader;

const Wrapper = styled.View`
  align-self: center;
  background-color: rgba(144, 143, 144, 0.1);
  width: 80%;
  padding: 20px;
  border-radius: 10px;
`;

const Spinner = styled.View`
  border: 6px solid #002495;
  border-radius: 50px;
  background-color: transparent;
  margin-top: 18px;
  height: 100px;
  width: 100px;
`;

const AnimatedSpinner = Animated.createAnimatedComponent(Spinner);

const AnimatedWrapper = Animated.createAnimatedComponent(Wrapper);
