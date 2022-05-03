import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import TestScreen from './screens/TestScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import JoinGroupScreen from './screens/JoinGroupScreen';
import CreateGroupScreen from './screens/CreateGroupScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="LogIn" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />  
      <Stack.Screen name="Test" component={TestScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="JoinGroup" component={JoinGroupScreen} />
      <Stack.Screen name="CreateGroup" component={CreateGroupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}