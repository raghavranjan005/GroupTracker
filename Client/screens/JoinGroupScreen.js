import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {Input, Button} from 'react-native-elements';
import axios from 'axios';


const JoinGroupScreen = ({navigation}) => {
    const [groupCode, setGroupCode] = useState('');
    const joinGroup = () =>{
        navigation.replace('Home');
    }
    return (
        <View style={styles.container}>
            <Input
                placeholder='Enter Group Code'
                label='Group Code'
                leftIcon={{ type: 'material', name: 'lock' }}
                value={groupCode}
                onChangeText={text => setGroupCode(text)}
            />
            <Button title="Join Group" style={styles.button} onPress = {joinGroup} />
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
    }
})

export default JoinGroupScreen;