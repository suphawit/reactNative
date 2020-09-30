
import * as React from 'react';
import Routes from './Routes.js'
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';

export default function Main() {
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
