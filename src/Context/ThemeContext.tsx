import {View, Text} from 'react-native';
import React, {createContext, useState} from 'react';
import Colors from '../utils/Colors';

export const ThemeContext = createContext({});

const ThemeContextProvider = ({children}) => {
  const [colors, setColors] = useState<string[]>([
    Colors.lavender,
    Colors.lavender,
    Colors.light_blush,
  ]);

  return (
    <ThemeContext.Provider
      value={{colors: colors, backgroundColor: Colors.dark_grey}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
