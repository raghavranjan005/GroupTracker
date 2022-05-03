import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {Input, Button} from 'react-native-elements';
import axios from 'axios';


const CreateGroupScreen = ({navigation}) => {

    const [groupName, setGroupName] = useState('');
    const createGroup = () =>{
        navigation.replace('Home');
    }
    return (
        <View style={styles.container}>
            <Input
                placeholder='Enter Group Name'
                label='Group Name'
                leftIcon={{ type: 'material', name: 'badge' }}
                value={groupName}
                onChangeText={text => setGroupName(text)}
            />
            <Button title="Create Group" style={styles.button} onPress = {createGroup} />
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

export default CreateGroupScreen;