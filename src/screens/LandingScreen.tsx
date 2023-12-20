import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DayScreen from './DayScreen';
import WeekScreen from './WeekScreen';
import MonthScreen from './MonthScreen';
import {ThemeContext} from '../Context/ThemeContext';
import Colors from '../utils/Colors';
const width = Dimensions.get('window').width;

const TabNavigator = createMaterialTopTabNavigator();

const tabBar = ({state, descriptors, navigation, position}) => {
  const {backgroundColor} = useContext(ThemeContext);

  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <TouchableWithoutFeedback key={route.key} onPress={onPress}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: backgroundColor,
              }}>
              <Text
                style={[
                  styles.tabtext,
                  {color: isFocused ? 'white' : Colors.frost},
                ]}>
                {route.name}
              </Text>
              <View
                style={{
                  width: isFocused ? '80%' : 0,
                  height: 4,
                  backgroundColor: Colors.snow,
                  marginBottom: 2,
                }}
              />
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

const topTabs = () => {
  return (
    <TabNavigator.Navigator
      initialLayout={{width: width}}
      tabBarPosition="top"
      tabBar={props => tabBar(props)}>
      <TabNavigator.Screen name="Day" component={DayScreen} />
      <TabNavigator.Screen name="Week" component={WeekScreen} />
      <TabNavigator.Screen name="Month" component={MonthScreen} />
    </TabNavigator.Navigator>
  );
};

const LandingScreen = () => {
  const {backgroundColor} = useContext(ThemeContext);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={backgroundColor} />
      {topTabs()}
    </SafeAreaView>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabtext: {
    paddingVertical: 20,
    fontSize: 24,
    fontWeight: '500',
  },
});
