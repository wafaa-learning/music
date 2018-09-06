import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const Header = ({
  title,
  artist,
  onDownPress,
  onQueuePress,
  onMessagePress,
}) => (
   <View style={styles.container}>
      <TouchableOpacity onPress={onDownPress}>
        <Image style={styles.button}
          source={require('../../../img/baseline_expand_more_white_18dp.png')} />
      </TouchableOpacity>
      <View style={styles.detailsWrapper}>
         <Text style={styles.title} >{title}</Text>
         <Text style={styles.artist} >{artist}</Text>
      </View>
      <TouchableOpacity onPress={onQueuePress}>
        <Image style={styles.button}
          source={require('../../../img/baseline_queue_music_white_18dp.png')} />
      </TouchableOpacity>
    </View>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 72,
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
  },
  title: {
     flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  artist: {
     flex: 1,
   textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
    marginTop: 4,
  },
  detailsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    opacity: 0.72
  }
});
