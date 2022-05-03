import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {Input, Button} from 'react-native-elements';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = () => {
        // auth.signInWithEmailAndPassword(email, password)
        // .catch((error) => {
        //     var errorMessage = error.message;
        //     alert(errorMessage)
        // });
        console.log("sign in");
    }
    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged
    //     (function (user) {
    //         if (user) {
    //             navigation.replace('Chat');
    //         } 
    //         else {
    //             navigation.canGoBack() &&
    //             navigation.popToTop();
    //         // No user is signed in.
    //         }
    //         });
    //         return unsubscribe;
    //     }, []
    // )
    return (
        <View style={styles.container}>
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
            <Button title="login" style={styles.button} onPress = {signIn} />
            <Button title="register" style={styles.button} onPress= {()=>navigation.navigate('Register')}/>
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

export default LoginScreen