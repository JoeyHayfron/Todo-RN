import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';

const SearchScreen = () => {
  return (
    <Wrapper>
      <Text>Samini what song is this</Text>
    </Wrapper>
  );
};

export default SearchScreen;

const Wrapper = styled.View`
  height: 100%;
  width: 100%;
`;
