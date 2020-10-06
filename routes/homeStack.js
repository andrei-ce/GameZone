import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//Custom Components:
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import { Header } from '../shared/header';
import { ImageBackground } from 'react-native';

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = ({ navigation }) => (
  <Navigator
    // headerMode='screen' //default option
    initialRouteName='Home'
    screenOptions={{
      gestureEnabled: false,
      headerTintColor: '#444',
      headerStyle: { backgroundColor: '#de1', height: 70 },
      headerTitleStyle: { fontWeight: 'bold' },
      headerTitleAlign: 'center',
    }}>
    <Screen
      name='Home'
      component={Home}
      options={{
        headerTitle: () => <Header title='GameZone' navigation={navigation} />,
      }}
    />

    <Screen
      name='Details'
      component={ReviewDetails}
      options={{
        title: 'Review Details',
      }}
    />
  </Navigator>
);
