import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { RootDrawerNavigator } from './routes/rootDrawer.js';

const getFonts = () => {
  return Font.loadAsync({
    'CG-regular': require('./assets/fonts/CormorantGaramond-Regular.ttf'),
    'CG-bold': require('./assets/fonts/CormorantGaramond-Bold.ttf'),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <RootDrawerNavigator />
      </NavigationContainer>
    );
  } else {
    return <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />;
  }
}
