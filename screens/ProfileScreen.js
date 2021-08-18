import React, {useState} from 'react';
import styled from 'styled-components';
import {Text, Platform, TextInput, Image, View} from 'react-native';
import BackButton from '../components/BackButton';

const platform = Platform.OS;
const ProfileScreen = props => {
  const [editClicked, setEditClicked] = useState(false);

  const handleEditClicked = () => {
    setEditClicked(!editClicked);
  };

  return (
    <Wrapper>
      <Header>
        <BackButton onPress={() => props.navigation.navigate('Home')} />
        <Text
          style={{
            marginLeft: 20,
            fontSize: 35,
            fontWeight: platform === 'ios' ? '700' : 'bold',
          }}>
          Profile
        </Text>
      </Header>
      <TopBanner>
        <ProfileImage source={require('../assets/images/profile.jpg')} />
        <UserName>Maya Angelo</UserName>
      </TopBanner>
      <EditProfile onPress={handleEditClicked}>
        <Image source={require('../assets/images/edit-32.png')} />
        <Text style={{color: '#0b2260', fontWeight: 'bold'}}>Edit</Text>
      </EditProfile>
      <TextInput
        placeholder="Name"
        style={{
          backgroundColor: '#bebebe',
          padding: 15,
          borderRadius: 10,
          marginBottom: 15,
        }}
        editable={editClicked}
      />
      <TextInput
        placeholder="Email"
        style={{
          backgroundColor: '#bebebe',
          padding: 15,
          borderRadius: 10,
          marginBottom: 15,
        }}
        editable={editClicked}
      />
      <TextInput
        placeholder="Phone"
        style={{
          backgroundColor: '#bebebe',
          padding: 15,
          borderRadius: 10,
          marginBottom: 15,
        }}
        editable={editClicked}
      />
      <TextInput
        placeholder="Password"
        style={{
          backgroundColor: '#bebebe',
          padding: 15,
          borderRadius: 10,
          marginBottom: 15,
        }}
        editable={editClicked}
      />
      <SaveButton editClicked={editClicked}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Save</Text>
      </SaveButton>
    </Wrapper>
  );
};

export default ProfileScreen;

const Wrapper = styled.ScrollView`
  height: 100%;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: ${platform === 'ios' ? 60 : 35}px;
  background: white;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const TopBanner = styled.View`
  height: 300px;
  background: white;
  border-radius: 20px;
  box-shadow: 0px 1px 1.5px #a8a8a8;
  justify-content: center;
  margin-bottom: 20px;
  elevation: 9;
  margin-left: 3px;
  margin-right: 3px;
`;

const ProfileImage = styled.Image`
  height: 140px;
  width: 140px;
  border-radius: 70px;
  align-self: center;
`;

const UserName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #696969;
  align-self: center;
  margin-top: 20px;
`;

const SaveButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: ${props => (props.editClicked ? '#0b2260' : '#707070')};
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const EditProfile = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 60px;
  margin-bottom: 20px;
  align-self: flex-end;
`;
