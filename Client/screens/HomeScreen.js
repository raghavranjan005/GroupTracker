import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Input, Button} from 'react-native-elements';

const HomeScreen = ({navigation, route})=> {

  console.log(route.params);
  const user = route.params.user;
  const [tick,setTick] = useState(0);


//   setInterval(function(){ 
// //     const t = tick;
// //     axios.post('http://10.23.0.138:5000/api/product/create',{"t":t})
// //           .then(function (response) {
// //             // console.log(response);
// //             setTick(response.data.tick);
// //           })
// //           .catch(function (error) {
// //             console.log(error);
// //           })
    
// // }, 5000);
  var createGrp = () => {
    navigation.replace('CreateGroup',{user:user});
  }

  var joinGrp = () => {
    navigation.replace('JoinGroup',{user:user});
  }


  useEffect(() => {
  });


  return (
    <View style={styles.container}>
      <Text>home</Text>
      <Button title="Create Group" style={styles.button} onPress = {createGrp}></Button>
      <Button title="Join Group"style={styles.button} onPress = {joinGrp}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
  },
  description: {
    marginLeft: '4%',
    fontSize: 15,
    marginBottom: '5%',
  },
  heading: {
    marginTop: '5%',
    marginLeft: '4%',
    fontSize: 15,
    marginBottom: '5%',
  },
  descriptionContent1: {
    fontSize: 30
  },
  descriptionContent2: {
    fontSize: 15
  },
  options: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    // width: "30%",
    marginTop: 10,
  },
  button: {
    width: 200,
    marginTop: 10
}
});

export default HomeScreen
