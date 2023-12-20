import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ThemeContext} from '../Context/ThemeContext';

const DayScreen = () => {
  const {colors} = useContext(ThemeContext);
  return (
    <LinearGradient colors={colors} style={styles.container}>
      <Text>Day Screen</Text>
    </LinearGradient>
  );
};

export default DayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
