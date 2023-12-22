import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

type DetailsHeaderProps = {
  value: string;
  leftEnabled: boolean;
  rightEnabled: boolean;
};

const dummyView = () => <View style={{width: 54}} />;

const DetailsHeader = ({
  value,
  leftEnabled,
  rightEnabled,
}: DetailsHeaderProps) => {
  return (
    <View style={styles.container}>
      {leftEnabled ? (
        <TouchableOpacity style={styles.arrow}>
          <MaterialCommunity
            name="menu-left"
            size={54}
            color={Colors.cream_white}
          />
        </TouchableOpacity>
      ) : (
        dummyView()
      )}
      <Text style={styles.value}>Wed, Dec 20</Text>
      {rightEnabled ? (
        <TouchableOpacity style={styles.arrow}>
          <MaterialCommunity
            name="menu-right"
            size={54}
            color={Colors.cream_white}
          />
        </TouchableOpacity>
      ) : (
        dummyView()
      )}
    </View>
  );
};

export default DetailsHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth * 1.4,
    borderBottomColor: 'white',
  },
  value: {
    fontSize: 26,
    fontFamily: 'Lora Regular Regular',
    fontWeight: '500',
    color: Colors.white,
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  arrow: {
    minWidth: 22,
  },
});
