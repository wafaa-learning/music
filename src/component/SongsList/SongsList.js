import React from "react";
import { StyleSheet, FlatList ,Button} from "react-native";
import ListItem from "../ListItem/ListItem";


const SongsList = (props) => {

   return (
     <FlatList
       style={styles.listContainer}
       data={props.songs}
       renderItem={(info) => (
         <ListItem
           songName={info.item.name}
           songImage={info.item.image}
           onItemPressed={() => props.onItemSelected(info.item.key)}
         />
       )}
     />
   );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default SongsList;
