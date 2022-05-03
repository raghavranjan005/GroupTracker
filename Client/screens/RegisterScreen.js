import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {Input, Button} from 'react-native-elements';
import axios from 'axios';

const RegisterScreen = ( {navigation} ) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');

    var register = () => {
        axios.post('http://10.23.0.138:5000/api/user/register',{
            name,email,password,mobile
        })
          .then(function (response) {
            if(response.data.flag===true){
                navigation.replace('Home');
            }
          })
          .catch(function (error) {
            console.log(error);
          })
    }
    
    return (
        <View>
            <Input
                placeholder='Enter your name'
                label='Name'
                leftIcon={{ type: 'material', name: 'badge' }}
                value={name}
                onChangeText={text => setName(text)}
            />
            <Input
                placeholder='Enter your email'
                label='Email'
                leftIcon={{ type: 'material', name: 'email' }}
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Input
                placeholder='Enter your password'
                label='Password'
                leftIcon={{ type: 'material', name: 'lock' }}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            <Input
                placeholder='Enter your phone number'
                label='Phone Number'
                leftIcon={{ type: 'material', name: 'phone' }}
<<<<<<< HEAD
                value={phoneNumber}
                onChangeText={text => setPhoneNumber(text)}
=======
                value={mobile}
                onChangeText={text => setMobile(text)}
>>>>>>> ecf80a9661aaa1bb18640c36faf701d9b046d2b8
            />
            <Button title="register" style={styles.button} onPress = {register} />
        </View>
    )
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

export default RegisterScreen