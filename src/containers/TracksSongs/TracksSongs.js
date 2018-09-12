import React, { Component } from 'react';
import Player from '../../component/Player/Player';
import SongDetail from '../../component/SongDetail/SongDetail';
import SongsList from '../../component/SongsList/SongsList';
import {Songs} from '../Songs/Songs';
import { StyleSheet, View } from "react-native";


export default class TracksSongs extends Component {
   state = {
    selectedSong: null,
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

   onFavHandler = (number) => {
      Songs[number].fav =!Songs[number].fav;
      this.forceUpdate();
   };

  render() {

    return(
      <View style={styles.container}>
      <SongDetail
          selectedSong={this.state.selectedSong}
          onModalClosed={this.modalClosedHandler}
        />
        <SongsList
         onPressFav={this.onFavHandler}
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
