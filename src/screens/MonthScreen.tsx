import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MonthScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Month Screen</Text>
    </View>
  );
};

export default MonthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
