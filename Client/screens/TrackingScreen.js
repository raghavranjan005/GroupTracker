import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {Input, Button} from 'react-native-elements';
import axios from 'axios';
import useLocation from "../hooks/useLocation";
import { Entypo } from '@expo/vector-icons';
 
const TrackingScreen = ({navigation,route}) => {

  const user = route.params.user;
  const loc = useLocation();
  // console.log("user",user)
  const group = route.params.group
  const safetyDistance = route.params.safetyDistance;
  const [location, setLocation] = useState(loc);
  const [distance, setDistance] = useState([]);
  
    useEffect(() => {
      setLocation(loc)
      function getDist() {
        axios.post('http://10.23.0.138:5000/api/group/track',{
            _id:user._id,location:loc,safetyDistance,group
        })
          .then(function (response) {
           console.log(response.data);
           setDistance(response.data);
          })
          .catch(function (error) {
            console.log(error);
          })
      }
      getDist()
      const interval = setInterval(() => getDist(), 10000)
      return () => {
        clearInterval(interval);
      }
  }, [loc])
      

    return (
        <View style={styles.container}>
 
        <View style={styles.description}>
            <Text style={styles.descriptionContent2}>
                Your Coordinates : {JSON.stringify(loc)}
            </Text>
        </View>
 
 
            <View style={styles.description}>
                <Text style={styles.descriptionContent1}>
                    Tracking Screen 
                </Text>
            </View>
 
            <View 
                style={{flexDirection: 'row',
                padding: 20,
                fontSize: 20,
                marginTop: 5,
                borderWidth: 1,
                borderColor: 'black'
                }}>
                    <Text style={{flex:3, fontSize: 20}} >Member</Text> 
                    <Text style={{flex:2, fontSize: 20}}>Distance</Text> 
                    <Text style={{flex:2, fontSize: 20}}>In range?</Text> 
                </View>
            {distance.map((member) => {
                return (
                <View 
                style={{flexDirection: 'row',
                padding: 20,
                fontSize: 15,
                marginTop: 5,
                borderWidth: 1,
                borderColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center'
                }}>
                    <Text style={{flex:3}} >{member.name}</Text> 
                    <Text style={{flex:2}}>{member.distance.toFixed(3)} m</Text> 
                    {!member.far && <Text style={{flex:2}}><Entypo name="check" size={24} color="black" /></Text>}
                    {member.far && <Text style={{flex:2}}><Entypo name="cross" size={24} color="black" /></Text>}
                </View>
                );
            })}
        </View>
    );
}
 
const styles = StyleSheet.create({
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
      fontSize: 16
  },
  container: {
      flex: 1,
      // alignItems: 'center',
      padding: 10,
      backgroundColor:"beige"
  },
  button: {
      width: 200,
      marginTop: 10
  },
  item: {
      padding: 20,
      fontSize: 15,
      marginTop: 5,
    }
})
 
export default TrackingScreen;