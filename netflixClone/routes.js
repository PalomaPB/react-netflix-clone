import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './src/pages/login';
import Home from './src/pages/home';
import Movie from './src/pages/movie';
import Fake from './src/pages/PaginaFake';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={'#FFF'}
      barStyle={{backgroundColor: '#141414'}}
      shifting={false}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={Fake}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({color}) => (
            <Icon name="magnify" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="em-breve"
        component={Fake}
        options={{
          tabBarLabel: 'Em Breve',
          tabBarIcon: ({color}) => (
            <Icon name="play-speed" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="downloads"
        component={Fake}
        options={{
          tabBarLabel: 'Downloads',
          tabBarIcon: ({color}) => (
            <Icon name="download" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="mais"
        component={Fake}
        options={{
          tabBarLabel: 'Mais',
          tabBarIcon: ({color}) => <Icon name="menu" color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeTabs}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Movie"
          component={Movie}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
