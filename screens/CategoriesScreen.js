import React from 'react';
import styled from 'styled-components';
import {Text, TouchableOpacity, Platform, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {hideSideNav} from '../redux/actions/ui/ui.actions';
import AddFloatingButton from '../components/AddFloatingButton';
import CategoryComponent from '../components/CategoryComponent';
import {Categories} from '../appData/categoryData';
import BackButton from '../components/BackButton';

const platform = Platform.OS;
const CategoriesScreen = props => {
  return (
    <Wrapper>
      <Header>
        <BackButton
          onPress={() => {
            props.hideSideNav();
            props.navigation.navigate('Home');
          }}
        />
        <Text
          style={{
            marginLeft: 20,
            fontSize: 35,
            fontWeight: platform === 'ios' ? '700' : 'bold',
          }}>
          Categories
        </Text>
      </Header>

      <AddFloatingButton
        onPress={() => props.navigation.navigate('AddCategory')}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{marginTop: 20, paddingLeft: 5, paddingRight: 5}}
        data={Categories}
        renderItem={({item}) => (
          <CategoryComponent
            categoryName={item.name}
            categoryColor={item.color}
            onPress={() => props.navigation.navigate('SingleCategory')}
          />
        )}
        keyExtractor={item => item.id}
      />
      <NoItemsToShow>You have no categories created</NoItemsToShow>
    </Wrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    hideSideNav: () => dispatch(hideSideNav()),
  };
};

export default connect(null, mapDispatchToProps)(CategoriesScreen);

const Wrapper = styled.View`
  background-color: #fafbff;
  position: absolute;
  border: 1px white;
  height: 100%;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: ${platform === 'ios' ? 50 : 25}px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

const NoItemsToShow = styled.Text`
  color: #646568;
`;
