import React, { Component } from 'react';
import {View} from 'react-native';
import TracksSongs from './src/containers/TracksSongs/TracksSongs';
import Player from './src/component/Player/Player';
import Main from './src/containers/main/main';
import { createStackNavigator } from 'react-navigation';



export default class App extends Component {

  render() {
    return (
      <AppStackNavigator />
   );
  }
}
const AppStackNavigator = createStackNavigator ({
   Home: Main,
})
