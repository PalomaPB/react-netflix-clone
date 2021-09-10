import React from 'react';
import Routes from './routes';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {StatusBar} from 'react-native';

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#E50914',
      background: '#3C3C3C',
      placeholder: '#ffffff',
      text: '#ffffff',
    },
  };
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor={'#000'} />
      <Routes />
    </PaperProvider>
  );
};

export default App;
