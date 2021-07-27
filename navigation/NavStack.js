import React from 'react';
import {Button, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import AuthenticationScreen from '../screens/AuthenticationScreen';
import Categories from '../screens/Categories';
import Settings from '../screens/Settings';

const Nav = createStackNavigator();

const NavStack = () => {
  return (
    <NavigationContainer>
      <Nav.Navigator initialRouteName="Home">
        <Nav.Screen name="Home" component={HomeScreen} />
        <Nav.Screen name="Categories" component={Categories} />
        <Nav.Screen name="Settings" component={Settings} />
      </Nav.Navigator>
    </NavigationContainer>
  );
};

export default NavStack;
