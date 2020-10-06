import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//Screens
import About from '../screens/about';
import { Header } from '../shared/header';

const { Navigator, Screen } = createStackNavigator();

export const AboutStack = ({ navigation }) => (
  <Navigator
    // headerMode='screen' //default option
    initialRouteName='About'
    screenOptions={{
      gestureEnabled: false,
      headerTintColor: '#444',
      headerStyle: { backgroundColor: '#de1', height: 70 },
      headerTitleStyle: { fontWeight: 'bold' },
      headerTitleAlign: 'center',
    }}>
    <Screen
      name='About'
      component={About}
      options={{
        headerTitle: () => <Header title='About GameZone' navigation={navigation} />,
      }}
    />
  </Navigator>
);
