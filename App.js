import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import placeImage from './src/assets/beautiful-place.jpg';

export default class App extends React.Component {

  state = {
    places: [],
    selectedPlace: null
  }

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random().toString(),
          name: placeName,
          image: {
            uri: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/2A84C724-1DD8-B71B-0B0F4361A736E640.jpg?width=950&quality=90&mode=crop'
          }
        })
      } 
    });
  }

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find((place) => {
          return place.key === key;
        })
      }
    });
    
  }

  placeDeleted = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      }
    })
  }

  modalClosed = () => {
    this.setState({selectedPlace: null})
  }

  render() {
    
    return (
      <View style={styles.container}>
        <PlaceDetail onItemDeleted={this.placeDeleted} onModalClosed={this.modalClosed} selectedPlace={this.state.selectedPlace}/>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList places={this.state.places} onItemSelected={this.placeSelectedHandler}/>
      </View>
      
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
  
});
