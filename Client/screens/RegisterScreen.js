import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {Input, Button} from 'react-native-elements';

const RegisterScreen = ( {navigation} ) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    var register = () => {
    //   auth.createUserWithEmailAndPassword( email, password)
    //   .then((userCredential) => {
    //     // Signed in 
    //     var user = userCredential.user;
    //     user.updateProfile(auth.currentUser, {
    //       displayName: name , 
    //       photoURL: imageURL?imageURL:
    //      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"

    //     }).then(() => {
    //       // Profile updated!
    //       // ...
    //     }).catch((error) => {
    //       // An error occurred
    //       // ...
    //     }); 
    //     // ...
    //   })
    //   .catch((error) => {
    //     var errorMessage = error.message;
    //     alert(errorMessage)
    //     // ..
    //   });
    //   navigation.popToTop();
    console.log("register");
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
                leftIcon={{ type: 'material', name: 'face' }}
                value={phoneNumber}
                onChangeText={text => setPhoneNumber(text)}
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