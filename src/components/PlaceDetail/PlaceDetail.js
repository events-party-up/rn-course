import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const placeDetail = (props) => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image style={styles.placeImage} source={props.selectedPlace.image}/>
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }
  return (
    <Modal
      visible={props.selectedPlace !== null}
      animationType="slide"
      onRequestClose={() => props.onModalClosed()}>
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button onPress={() => props.onItemDeleted()} title="Delete" color="red" />
          <Button onPress={() => props.onModalClosed()} title="Close" />
        </View>
      </View>
    </Modal>
  )
};



const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  }
});



export default placeDetail;
