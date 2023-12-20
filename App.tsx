import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LandingScreen from './src/screens/LandingScreen';
import {NavigationContainer} from '@react-navigation/native';
import ThemeContextProvider from './src/Context/ThemeContext';

const App = () => {
  return (
    <ThemeContextProvider>
      <NavigationContainer>
        <LandingScreen />
      </NavigationContainer>
    </ThemeContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
