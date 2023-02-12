import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ForgotPassword from './components/forgotPassword';
import Messages from './components/Messages';
import Profile from './components/Profile';
import Signup from './components/signup';
import Home from './components/Home';
import Login from './components/login';
import ContextProvider from './context/Context'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
function Root() {
  return (
    <Drawer.Navigator initialRouteName="Messages"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
      }}>
      
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Messages" component={Messages} />
      <Drawer.Screen name="Profile" component={Profile} />
      
      {/* <Drawer.Screen name="Logout" component={Login} /> */}
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <ContextProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Root" component={Root} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> 
      </Stack.Navigator>

    </NavigationContainer>
    </ContextProvider>
  );
};


export default App;