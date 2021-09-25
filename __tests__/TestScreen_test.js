import 'react-native';
import React from 'react';
import TestScreen from '../screens/TestScreen';
import renderer from 'react-test-renderer';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

it('renders correctly', () => {
  renderer.create(<TestScreen />);
});
