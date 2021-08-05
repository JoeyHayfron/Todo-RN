import React from 'react';
import styled from 'styled-components';
import {Text, Platform} from 'react-native';
import BackButton from '../components/BackButton';

const platform = Platform.OS;
const ProfileScreen = () => {
  return (
    <Wrapper>
      <Header>
        <BackButton />
      </Header>
      <TopBanner></TopBanner>
    </Wrapper>
  );
};

export default ProfileScreen;

const Wrapper = styled.View`
  height: 100%;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: ${platform === 'ios' ? 60 : 35}px;
`;

const Header = styled.View``;

const TopBanner = styled.View``;
