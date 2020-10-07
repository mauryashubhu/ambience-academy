import React, { useEffect, useState, useRef } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import DefaultPreference from 'react-native-default-preference';
import Icon from "react-native-vector-icons/Ionicons";

import { Transition, Transitioning } from 'react-native-reanimated';

import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const transition = (
    <Transition.Together>
        <Transition.In type='slide-bottom' durationMs={400} />
        <Transition.Change interpolation="easeInOut"/>
        <Transition.Out type='fade' durationMs={400} />
    </Transition.Together>
);


export default function ProfileScreen({ props, navigation }) {
    let [userData, setUserData] = useState({});
    let [showEmail, setShowEmail] = useState('');
    let [userAvailable, setUserAvailable] = useState(false);
    let [content, setContent] = useState({});

    const ref = useRef();

    useEffect(() => {
        getData();
    }, [])

    function getData() {
        try {
            DefaultPreference.getMultiple(['email', 'password']).then(function (value) {
                if (value[0] != null) {
                    setShowEmail(value[0])
                    // setIsdata(value[0])
                    console.log('getting mail in profile screen', value[0])
                    // setContent(value)
                    
                }
            });
        }
        catch (err) {
            alert(err)
        }
    }

    const toggleUserDetails = () => {
        if (userAvailable == false) {
            
            showUser();  
            ref.current.animateNextTransition();         
        } else {
            ref.current.animateNextTransition();
            setUserAvailable(false)
        }
    }

    const showUser = () => {
        console.log('press krne pr dikha rha hai', showEmail);
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM ambience where user_email = ?',
                [showEmail],
                (tx, results) => {
                    var len = results.rows.length;
                    console.log('len', len);
                    if (len > 0) {
                        console.log(results.rows.item(0));
                        ref.current.animateNextTransition();
                        setUserData(results.rows.item(0));
                        setUserAvailable(true)
                    } else {
                        alert('No user found');
                    }
                }
            );
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.screenHeader}>
                <View style={{ flex: 2 }}>
                    <TouchableOpacity
                        onPress={() => navigation.toggleDrawer()}
                        style={styles.menu}
                    >
                        <Icon
                            name='menu-outline'
                            color="blue"
                            size={35}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    // onPress={() => internet()}
                    style={{ flex: 8, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 25 }}>ProfileScreen</Text>
                </TouchableOpacity>
                <View style={{ flex: 2, flexDirection: 'row-reverse' }}>
                    <TouchableOpacity
                        onPress={() => signOut()}
                        style={styles.logout}
                    >
                        <Icon
                            name='exit-outline'
                            color="blue"
                            size={24}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <Transitioning.View
                ref={ref}
                transition={transition}
                style={styles.block}
            >
                <TouchableOpacity onPress={() => { toggleUserDetails(); }}>
                    <Text style={{ fontSize: 25, color: userAvailable? 'black': 'white'}}>{showEmail}</Text>
                    {userAvailable &&
                        <View>
                            <View style={{ marginLeft: 35, marginRight: 35, marginTop: 10 }}>
                                <Text style={{ fontSize: 20, color: 'white'}}>User Id: {userData.user_id}</Text>
                                <Text style={{ fontSize: 20, color: 'white'}}>User Name: {userData.user_name}</Text>
                                <Text style={{ fontSize: 20, color: 'white'}}>User Contact: {userData.user_contact}</Text>
                                <Text style={{ fontSize: 20, color: 'white'}}>User Address: {userData.user_email}</Text>
                            </View>
                        </View>
                    }
                </TouchableOpacity>
            </Transitioning.View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    block: {
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowColor: 'blue',
        shadowOffset: { height: 1, width: 1 },
        elevation: 3,
        backgroundColor: '#00FFA2',
        borderRadius: 6,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 30,
        // height: 30,
        width: "75%",
        marginHorizontal: 4,
        marginVertical: 6,
        alignContent:'center',
        justifyContent: 'center'
    },
    header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,

    },
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6
    },
    active: {
        backgroundColor: 'red',
    },
    inactive: {
        backgroundColor: 'red',
    },
    screenHeader: {
        // flex: 8,
        height: 50,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 10,
        // borderWidth:1
    },
    menu: {
        borderColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 10,
        height: 30,
        width: 55,

    },
    logout: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 5,
        height: 30,
        width: 55,
        // borderWidth: 1

    }
});