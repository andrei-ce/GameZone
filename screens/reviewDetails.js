import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Card from '../shared/card';
import { globalStyles, images } from '../styles/global';

const ReviewDetails = ({ navigation, route }) => {
  // const pressHandler = () => {
  //   navigation.goBack();
  // };

  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={globalStyles.container}>
      <Card>
        <Text>{route.params.title}</Text>
        <Text>{route.params.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating:</Text>
          <Image source={images.ratings[route.params.rating]} />
        </View>
      </Card>
    </ImageBackground>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});
