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
import StartTrackingScreen from './screens/StartTrackingScreen';
import TrackingScreen from './screens/TrackingScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
<<<<<<< HEAD
=======
      <Stack.Screen name="StartTracking" component={StartTrackingScreen} />
>>>>>>> d36b08a0aee85ad46369ccbb3c53afad355c4bbb
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="LogIn" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />  
      <Stack.Screen name="JoinGroup" component={JoinGroupScreen} />
      <Stack.Screen name="CreateGroup" component={CreateGroupScreen} />
      <Stack.Screen name="Test" component={TestScreen} />
      <Stack.Screen name="Tracking" component={TrackingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}