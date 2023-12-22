import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Colors from '../utils/Colors';
import ValueItem from './ValueItem';

const ActivityDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <ValueItem iconName="fire" value="411.3" unit="Cal" />
        <ValueItem iconName="ruler" value="7,632" unit="m" />
      </View>
      <View style={styles.rowContainer}>
        <ValueItem iconName="timer" value="01:48:12" />
        <ValueItem iconName="speedometer" value="4.2" unit="km/h" />
      </View>
    </View>
  );
};

export default ActivityDetails;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
  },
});
