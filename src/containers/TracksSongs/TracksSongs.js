import React, { Component } from 'react';
import Player from '../../component/Player/Player';

export const TRACKS = [
  {
    title: 'Thanksgiving',
    artist: 'Winston',
    albumArtUrl: "https://78.media.tumblr.com/e0cb83dc149ecfd2e8b39d0e2827aabe/tumblr_p6dy8ajAyR1tom83ho1_640.jpg",
    audioUrl: "http://russprince.com/hobbies/files/02%20Winston%20-%20Thanksgiving.mp3",
  },
  {
    title: 'Minute Waltz',
    artist: 'Chopin',
    albumArtUrl: "https://78.media.tumblr.com/8cc498ee34ff5694402cb2376f5c617b/tumblr_p64xvnsrAP1vwvx0xo1_1280.jpg",
    audioUrl: 'http://russprince.com/hobbies/files/09%20Chopin%20-%20Minute%20Waltz.mp3',
  },
  {
    title: 'Hotline Bling',
    artist: 'Drake',
    albumArtUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
    audioUrl: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3',
  },
];

export default class TracksSongs extends Component {
   static navigationOptions = {
      header: null,
   };
   back = () => this.props.navigation.goBack();
  render() {
    return(
      <Player tracks={TRACKS} back={this.back} />
   );
  }
}
