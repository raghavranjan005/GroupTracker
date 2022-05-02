import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import {
  Animated,
  FlatList,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";
import useLocation from "../hooks/useLocation";


const TestScreen = ({navigation})=> {
  const location = useLocation();
 
  return (
    <>
     <Text>{JSON.stringify(location)}</Text>
    </>
  );
}

export default TestScreen;
