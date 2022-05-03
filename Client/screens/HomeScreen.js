import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Input, Button} from 'react-native-elements';

const HomeScreen = ({navigation})=> {

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

  useEffect(() => {
  });


  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <Text style={styles.descriptionContent1}>
          Hi Name
        </Text>
        <Text style={styles.descriptionContent2}>
          Your Coordinates : 192.12312, 3124.434324
        </Text>
      </View>

      <View style = {styles.options}>
        <Button title="Create Group" style={styles.button}/>
        <Button title="Join Group" style={styles.button} />
      </View>

      <View style={styles.heading}>
        <Text style={styles.descriptionContent1}>
          My Groups
        </Text>
      </View>


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
