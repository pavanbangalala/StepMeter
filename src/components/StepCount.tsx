import {StyleSheet, Text, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import Colors from '../utils/Colors';
import IonIcon from 'react-native-vector-icons/Ionicons';

type StepCountProps = {
  stepCount: string;
};

const StepCount = ({stepCount}: StepCountProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.stepTitle}>steps</Text>
        <IonIcon name={'footsteps-sharp'} size={40} color={Colors.alice} />
      </View>
      <Text style={styles.stepText}>{stepCount}</Text>
    </View>
  );
};

export default StepCount;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    paddingHorizontal: 4,
    marginTop: 8,
  },
  stepText: {
    fontSize: 72,
    fontWeight: '600',
    alignSelf: 'flex-end',
    flex: 1,
    textAlign: 'right',
    textAlignVertical: 'bottom',
    color: Colors.alice,
    letterSpacing: 0.2,
    fontFamily: 'Lora Regular Regular',
  },
  titleContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  stepTitle: {
    fontSize: 14,
    color: Colors.white,
    marginVertical: 8,
    fontWeight: 'bold',
    fontFamily: 'Lora Regular Regular',
  },
});
