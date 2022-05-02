import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({navigation})=> {

  const [tick,setTick] = useState(0);


  setInterval(function(){ 
    const t = tick;
    axios.post('http://10.23.0.138:5000/api/product/create',{"t":t})
          .then(function (response) {
            // console.log(response);
            setTick(response.data.tick);
          })
          .catch(function (error) {
            console.log(error);
          })
    
}, 5000);



  useEffect(() => {


  });


  return (
    <View style={styles.container}>
      <Text>{tick}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen
