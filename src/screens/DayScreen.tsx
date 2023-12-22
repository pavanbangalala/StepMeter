import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ThemeContext} from '../Context/ThemeContext';
import StepCount from '../components/StepCount';
import {numberWithCommas} from '../utils/HelperFunctions';
import ActivityDetails from '../components/ActivityDetails';
import TotalDetails from '../components/TotalDetails';
import Swiper from 'react-native-swiper';

const DayScreen = () => {
  const steps = numberWithCommas(10225);
  return (
    <Swiper horizontal={true} index={0} showsPagination={false}>
      <TotalDetails steps={steps} />
      <TotalDetails steps={steps} />
      <TotalDetails steps={steps} />
    </Swiper>
  );
};

export default DayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
