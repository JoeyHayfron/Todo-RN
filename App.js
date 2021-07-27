import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Provider} from 'react-redux';
import Store from './redux/store';
import HomeScreen from './screens/HomeScreen';
import NavScreen from './screens/NavScreen';

const App = () => {
  return (
    <Provider store={Store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
