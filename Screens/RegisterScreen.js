import React, { useState, useContext, } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import DefaultPreference from 'react-native-default-preference';
import { AuthContext } from './context'


const RegisterScreen = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const { signUp } = useContext(AuthContext)

    const handleSubmitPress = () => {
        console.log('userpassword', userPassword)
        if (!userEmail && !userPassword && !userPhone && !userName) {
            alert('Please fill properly');
        } 
        // else {
        //     fetch('https://2b55d4d595ef.ngrok.io/form', {
        //         method: 'POST',
        //         headers: {
        //             Accept: 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             username: userName,
        //             userphone: userPhone,
        //             useremail: userEmail,
        //             userpassword: userPassword,
        //         })
        //     })
        //         .then(response => response.json())
        //         .then(json => {
        //             console.log(json);
        //             if(json.status === "200"){
        //                 console.log("SAVEDATA KOO CALL JAANIHAI?")
        //                 // const data =json.data;
        //                 // saveData(data);
        //                 navigation.navigate('Login')
        //             }
                    
        //         })
        //         .catch((error) => {
        //             console.error("error hai", error);
        //             alert(error)
        //             // alert('mail already exist')
        //         })
        // }
        saveData();
    }

    function saveData() {
        try {
            DefaultPreference.setMultiple({
                'useId': userPhone,
                'phone': userPhone,
                'email': userEmail,
                'password': userPassword
            }).then(function () {
                console.log('default prefrences me done')
                signUp();
                // navigation.navigate('Login')
            });
        }
        catch (err) {
            alert(err)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, marginBottom: 40 }}>RegisterScreen</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    value={userName}
                    onChangeText={userName => setUserName(userName)}
                    placeholder="Enter Name"
                    placeholderTextColor="gray"
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    value={userPhone}
                    onChangeText={userPhone => setUserPhone(userPhone)}
                    placeholder="Enter Phone"
                    placeholderTextColor="gray"
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    value={userEmail}
                    onChangeText={UserEmail => setUserEmail(UserEmail)}
                    placeholder="Enter Email"
                    placeholderTextColor="gray"
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    value={userPassword}
                    onChangeText={UserPassword => setUserPassword(UserPassword)}
                    placeholder="Enter Password"
                    placeholderTextColor="gray"
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity onPress={() => handleSubmitPress()} style={styles.loginBtn}>
                <Text style={{ color: 'white' }}>SignUP</Text>
            </TouchableOpacity>
        </View>
    )


}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    inputView: {
        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
});