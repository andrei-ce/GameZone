import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';

const ReviewDetails = ({ navigation, route }) => {
  // const pressHandler = () => {
  //   navigation.goBack();
  // };

  const { title } = route.params;

  return (
    <View style={globalStyles.container}>
      <Text>{route.params.title}</Text>
      <Text>{route.params.body}</Text>
      <Text>{route.params.rating}</Text>
    </View>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({});
