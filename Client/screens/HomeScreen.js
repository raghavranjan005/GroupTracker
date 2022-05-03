import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Input, Button} from 'react-native-elements';
 
const HomeScreen = ({navigation, route})=> {
 
  const user = route.params.user;
  const members = [
    {
      id: "1",
      name: "Earnest Green",
      latitude : "9999",
      longitude : "9999",
    },
    {
      id: "2",
      name: "Winston Orn",
      latitude : "9999",
      longitude : "9999",
    },
    {
      id: "3",
      name: "Carlton Collins",
      latitude : "9999",
      longitude : "9999",
    },
    {
      id: "4",
      name: "Malcolm Labadie",
      latitude : "9999",
      longitude : "9999",
    },
    {
      id: "5",
      name: "Michelle Dare",
      latitude : "9999",
      longitude : "9999",
    },
  ];
 
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

  const createGrp=()=>{
    navigation.replace("CreateGroup",{user:user})
  }
 
  const joinGrp=()=>{
    navigation.replace("JoinGroup",{user:user})
  }

  const enterGrp=(group)=>{
    navigation.replace("StartTracking",{user:user,group:group})
  }
 
  useEffect(() => {
  });
 
 
  return (
 
 
    <View style={styles.container}>
      <View style={styles.description}>
        <Text style={styles.descriptionContent1}>
          {user.name}
        </Text>
        <Text style={styles.descriptionContent2}>
          Your Coordinates : 192.12312, 3124.434324
        </Text>
      </View>
 
      <View style = {styles.options}>
        <Button title="Create Group" style={styles.button} onPress={createGrp}/>
        <Button title="Join Group" style={styles.button} onPress={joinGrp} />
      </View>
 
      <View style={styles.heading}>
        <Text style={styles.descriptionContent1}>
          My Groups
        </Text>
      </View>
 
      {
        user.groups.map((group) => {
          return (
          <View 
          style={{flexDirection: 'row',
          padding: 20,
          fontSize: 15,
          marginTop: 5,
          justifyContent: 'center',
          alignItems: 'center'
          }}>
              <Text style={{flex:3}} >{group.name}</Text> 
              <Button title="Enter" style={styles.segment} onPress={()=>enterGrp(group)}></Button>
          </View>
          );
      })}
 
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
    padding: "5%" 
  },
  segment: {
    flex:1,
    
  }
});
 
export default HomeScreen