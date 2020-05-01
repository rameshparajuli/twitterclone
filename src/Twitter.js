import 'react-native-gesture-handler';
import * as React from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {DrawerNavigator} from './routers';

import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {...PaperDefaultTheme.colors, ...NavigationDefaultTheme.colors},
};
const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {...PaperDarkTheme.colors, ...NavigationDarkTheme.colors},
};

export default function Twitter() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme; // Use Light/Dark theme based on a state

  function toggleTheme() {
    // We will pass this function to Drawer and invoke it on theme switch press
    setIsDarkTheme((isDark) => !isDark);
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <DrawerNavigator toggleTheme={toggleTheme} />
      </NavigationContainer>
    </PaperProvider>
  );
}
