import React from 'react';
import {Platform} from 'react-native';
import {Provider} from 'react-redux';
import Store from './redux/store';
import NavStack from './navigation/NavStack';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const os = Platform.OS;
const App = () => {
  if (os === 'android') {
    GoogleSignin.configure({
      webClientId:
        '78112068436-dgrotlebpa94bumh04ea7j0gbbm484of.apps.googleusercontent.com',
    });
  } else {
    GoogleSignin.configure({
      webClientId:
        '78112068436-gcarb4co86gmqsmo473itobsi7ghrhmq.apps.googleusercontent.com',
    });
  }

  return (
    <Provider store={Store}>
      <NavStack />
    </Provider>
  );
};

export default App;
