import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {Input, Button} from 'react-native-elements';
import axios from 'axios';

const StartTrackingScreen = ({navigation, route}) => {
    const user = route.params.user;
    const group = route.params.group
    const [safetyDistance, setSafetyDistance] = useState('');
    const members = [
        {
          id: "1",
          name: "Earnest Green",
        },
        {
          id: "2",
          name: "Winston Orn",
        },
        {
          id: "3",
          name: "Carlton Collins",
        },
        {
          id: "4",
          name: "Malcolm Labadie",
        },
        {
          id: "5",
          name: "Michelle Dare",
        },
      ];
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{group.name} {"\n"}</Text>
            <Input
                placeholder='Enter Safety Distance'
                label='Safety Distance'
                // leftIcon={{ type: 'material', name: 'name' }}
                value={safetyDistance}
                onChangeText={text => setSafetyDistance(text)}
            />
            <Button title="Start Tracking" style={styles.button} onPress= {()=>navigation.navigate('Tracking')}/>
            <Text style={styles.secondText}>{"\n"}{"\n"}Members</Text>
            {group.members.map((member) => {
                return (
                <View>
                    <Text style={styles.item}>{member.name}</Text>
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
        padding: 10,
        fontSize: 15,
        marginTop: 10,
      },
    titleText: {
      fontSize: 40,
      fontWeight: "bold",
      textDecorationLine: 'underline'
    },
    secondText: {
      fontSize: 20,
      fontWeight: "bold",
      textDecorationLine: 'underline'
    }
})

export default StartTrackingScreen;