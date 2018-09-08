import React, { Component } from 'react';
import Player from '../../component/Player/Player';
import SongDetail from '../../component/SongDetail/SongDetail';
import SongsList from '../../component/SongsList/SongsList';
import {Songs} from '../Songs/Songs';
import { StyleSheet, View } from "react-native";


export default class TracksSongs extends Component {
   state = {
    selectedSong: null
  };


  modalClosedHandler = () => {
    this.setState({
      selectedSong: null
    });
  };

  songSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedSong: Songs.find(song => {
          return song.key === key;
        })
      };
    });
  };

   static navigationOptions = {
      header: null,
   };
   back = () => this.props.navigation.goBack();
  render() {
    return(
      <View style={styles.container}>
      <SongDetail
          selectedSong={this.state.selectedSong}
        />
        <SongsList
          songs={Songs}
          onItemSelected={this.songSelectedHandler}
        />
      </View>

   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
