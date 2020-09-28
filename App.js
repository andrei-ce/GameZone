import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { AppNavigator } from './routes/appNavigator';

const getFonts = () => {
  return Font.loadAsync({
    'CG-regular': require('./assets/fonts/CormorantGaramond-Regular.ttf'),
    'CG-bold': require('./assets/fonts/CormorantGaramond-Bold.ttf'),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <AppNavigator />;
  } else {
    return <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />;
  }
}
