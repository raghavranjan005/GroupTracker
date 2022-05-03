import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {Input, Button} from 'react-native-elements';
import axios from 'axios';

const TrackingScreen = ({navigation}) => {
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

    return (
        <View style={styles.container}>
            <Text style={{fontSize:20,fontWeight:"bold"}}>Tracking Screen</Text>
            <View 
                style={{flexDirection: 'row',
                padding: 20,
                fontSize: 15,
                marginTop: 5,
                }}>
                    <Text style={{flex:2}} >Member</Text> 
                    <Text style={{flex:1}}>Latitude</Text> 
                    <Text style={{flex:1}}>Longitude</Text> 
                </View>
            {members.map((member) => {
                return (
                <View 
                style={{flexDirection: 'row',
                padding: 20,
                fontSize: 15,
                marginTop: 5,
                }}>
                    <Text style={{flex:2}} >{member.name}</Text> 
                    <Text style={{flex:1}}>{member.latitude}</Text> 
                    <Text style={{flex:1}}>{member.longitude}</Text> 
                </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10
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