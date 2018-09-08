import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const listItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image resizeMode="cover" source={{uri: props.songImage}} style={styles.songImage} />
      <Text style={styles.textItem}>{props.songName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  textItem: {
     color: '#39065D',
   fontSize: 20,
 },
  songImage: {
      marginRight: 17,
      height: 50,
      width: 50
  }
});

export default listItem;
