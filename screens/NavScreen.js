import React from 'react';
import {Text, Dimensions, Image} from 'react-native';
import {connect} from 'react-redux';
import styled from 'styled-components/native';
import {Menu} from '../appData/menuData';
import SideMenuItem from '../components/SideMenuItem';
import {hideSideNav} from '../redux/actions/ui/ui.actions';
import {signOutUser} from '../services/firebase';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const NavScreen = props => {
  return (
    <NavScreenWrapper>
      <BackButton onPress={() => props.hideSideNav()}>
        <Image source={require('../assets/images/back-50.png')} />
      </BackButton>
      <ProfileImageWrapper>
        <ProfileImage source={require('../assets/images/profile.jpg')} />
      </ProfileImageWrapper>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 30,
          maxWidth: 200,
          color: 'white',
          marginLeft: 25,
          marginTop: 250,
        }}>
        Michelle Rodriguez
      </Text>
      <MenuWrapper>
        {Menu.map((item, index) => {
          return (
            <SideMenuItem
              imageSource={item.imageSource}
              menuText={item.text}
              key={index}
              clicked={() => {
                if (item.text === 'Logout') {
                  signOutUser().then(() => {
                    props.nav.navigate('AuthScreen');
                  });
                } else props.nav.navigate(item.text);
              }}
            />
          );
        })}
      </MenuWrapper>
      <Rating>
        <Text style={{color: 'white'}}>Good</Text>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
          Consistency
        </Text>
      </Rating>
    </NavScreenWrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    hideSideNav: () => dispatch(hideSideNav()),
  };
};

export default connect(null, mapDispatchToProps)(NavScreen);

const NavScreenWrapper = styled.View`
  flex: 1;
  background-color: #0b225f;
  z-index: -1;
`;

const MenuWrapper = styled.View`
  margin-top: ${screenHeight <= 667 ? 40 : 50}px;
  margin-left: 25px;
`;

const ProfileImageWrapper = styled.View`
  height: 115px;
  width: 115px;
  background-color: transparent;
  border-width: 3px;
  border-color: #48598b;
  border-radius: 57.5px;
  position: absolute;
  top: 100px;
  left: 25px;
`;
const ProfileImage = styled.Image`
  height: 100px;
  width: 100px;
  top: 5;
  left: 5;
  border-radius: 50px;
  position: absolute;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 80px;
  right: ${screenWidth / 2.6};
`;

const Rating = styled.View`
  margin-top: ${screenHeight <= 667 ? 20 : 50}px;
  justify-content: flex-end;
  margin-left: 25px;
`;
