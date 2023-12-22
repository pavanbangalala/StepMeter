import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import StepCount from './StepCount';
import ActivityDetails from './ActivityDetails';
import {ThemeContext} from '../Context/ThemeContext';
import DetailsHeader from './DetailsHeader';
import LineChart from './DayChart';
import DayChart from './DayChart';

type TotalDetailsProps = {
  steps: string;
};

const TotalDetails = ({steps}: TotalDetailsProps) => {
  const {colors} = useContext(ThemeContext);
  return (
    <LinearGradient colors={colors} style={styles.container}>
      <DetailsHeader value="Wed,Dec 21" />
      <StepCount stepCount={steps} />
      <ActivityDetails />
      <DayChart />
    </LinearGradient>
  );
};

export default TotalDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 2,
  },
});
