import React, { Component } from 'react';
import { StyleSheet, View,Text } from "react-native";

export default class TracksSongs extends Component {

   state = {
    Favorite: [],
  };

   render(){
      return(
         <Text>{this.state.Favorite}</Text>
      );
   }
}
