import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../utils/Colors';

type ValueItemProps = {
  iconName: string;
  value: string;
  unit?: string;
};
const ValueItem = ({iconName, value, unit}: ValueItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <MaterialCommunityIcons name={iconName} size={30} color={Colors.alice} />
      <Text style={styles.value} numberOfLines={1} ellipsizeMode="middle">
        {value}
      </Text>
      {unit ? (
        <Text style={styles.unit} numberOfLines={1} ellipsizeMode="middle">
          {unit}
        </Text>
      ) : null}
    </View>
  );
};

export default ValueItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 12,
    paddingLeft: 6,
    paddingRight: 6,
    borderWidth: 1,
    borderColor: Colors.alice,
  },
  value: {
    color: Colors.alice,
    fontSize: 24,
    flex: 1,
    textAlign: 'right',
  },
  unit: {
    color: Colors.alice,
    fontSize: 22,
    marginLeft: 4,
  },
});
