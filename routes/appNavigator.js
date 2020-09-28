import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//Screens
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const { Navigator, Screen } = createStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Navigator
      initialRouteName='Home'
      screenOptions={{
        gestureEnabled: false,
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#de1', height: 70 },
      }}>
      <Screen
        name='Home'
        component={Home}
        options={{
          title: 'GameZone',
          // headerStyle: { backgroundColor: '#ddd'}
        }}
      />
      <Screen
        name='Details'
        component={ReviewDetails}
        options={{
          title: 'Review Details',
          // headerStyle: { backgroundColor: '#ddd' }
        }}
      />
    </Navigator>
  </NavigationContainer>
);
