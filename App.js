import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Provider} from 'react-redux';
import Store from './redux/store';
import HomeScreen from './screens/HomeScreen';
import NavStack from './navigation/NavStack';

const App = () => {
  return (
    <Provider store={Store}>
      <NavStack />
    </Provider>
  );
};

export default App;
