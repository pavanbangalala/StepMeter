import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ThemeContext} from '../Context/ThemeContext';
import StepCount from '../components/StepCount';
import {numberWithCommas} from '../utils/HelperFunctions';

const DayScreen = () => {
  const {colors} = useContext(ThemeContext);
  const steps = numberWithCommas(10225);
  return (
    <LinearGradient colors={colors} style={styles.container}>
      <StepCount stepCount={steps} />
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
