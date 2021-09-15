import React from 'react';
import {Button, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AddTaskScreen from '../screens/AddTaskScreen';
import AddCategoryScreen from '../screens/AddCategoryScreen';
import SingleCategoryScreen from '../screens/SingleCategoryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import SearchScreen from '../screens/SearchScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import AuthenticationScreen from '../screens/AuthenticationScreen';
import Categories from '../screens/CategoriesScreen';

const Nav = createStackNavigator();

const NavStack = () => {
  return (
    <NavigationContainer>
      <Nav.Navigator initialRouteName="AuthScreen">
        <Nav.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Nav.Screen
          name="SingleCategory"
          component={SingleCategoryScreen}
          options={{headerShown: false}}
        />
        <Nav.Screen
          name="AddTask"
          component={AddTaskScreen}
          options={{headerShown: false}}
        />
        <Nav.Screen
          name="Categories"
          component={Categories}
          options={{headerShown: false}}
        />
        <Nav.Screen
          name="AddCategory"
          component={AddCategoryScreen}
          options={{headerShown: false}}
        />
        <Nav.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Nav.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Nav.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Nav.Screen
          name="AuthScreen"
          component={AuthenticationScreen}
          options={{headerShown: false}}
        />
        <Nav.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{headerShown: false}}
        />
        <Nav.Screen
          name="Search"
          component={SearchScreen}
          options={{headerShown: false}}
        />
      </Nav.Navigator>
    </NavigationContainer>
  );
};

export default NavStack;
