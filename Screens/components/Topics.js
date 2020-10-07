import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ProgressBarAndroid, PermissionsAndroid, Alert, Platform } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import Video from 'react-native-video';
// import RNFetchBlob from 'rn-fetch-blob'
import Swiper from 'react-native-swiper'
import { AuthContext } from '../context'
import { ScrollView } from 'react-native-gesture-handler';
import Downloadpdf from './Downloadpdf'
// import { ScrollView } from 'react-native-gesture-handler';


const { width, height } = Dimensions.get('window');

const TopicScreen = ({ route, navigation }) => {
    console.log('topics params is = ', route, navigation)
    // const [values, setValues] = useState({
    //     rate: 1,
    //     volume: 1,
    //     muted: false,
    //     resizeMode: 'contain',
    //     duration: 0.0,
    //     currentTime: 0.0,
    //     paused: true,
    //     pickerValueHolder: '1.0',
    //     pausedText: 'Play',
    //     hideControls: true,
    // });

    const [videolink, setVideoLink] = useState([
        'https://www.w3schools.com/html/mov_bbb.mp4',
        'https://www.w3schools.com/html/mov_bbb.mp4',
        'https://www.w3schools.com/html/mov_bbb.mp4',
    ]);
    const [pdflink, setPdfLink] = useState([
        { material: 'A', link: 'http://samples.leanpub.com/thereactnativebook-sample.pdf' },
        { material: 'B', link: 'http://samples.leanpub.com/thereactnativebook-sample.pdf' },
        { material: 'C', link: 'http://samples.leanpub.com/thereactnativebook-sample.pdf' },
    ]);

    const { signOut } = React.useContext(AuthContext);


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flex: 2 }}>
                    <TouchableOpacity
                        onPress={() => navigation.pop()}
                        style={styles.menu}
                    >
                        <Icon
                            name='chevron-back-outline'
                            color="blue"
                            size={28}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{ flex: 8, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 25 }}>topic screen {route.params.topic.topicID}</Text>
                </TouchableOpacity>
                <View style={{ flex: 2 }}>
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
            <View style={{ flex: 1 }}>
                <View style={styles.cardUpper}>
                    <Swiper height={400} containerStyle={{ marginTop: -80 }} >
                        {videolink.map((video, key) => (
                            <TouchableOpacity key={key} onPress={() => navigation.navigate('videoscreen', { params: { video } })}
                                style={{ width: '100%', height: 400, justifyContent: 'center', alignItems: 'center' }}>
                                <Icon
                                    name='videocam-outline'
                                    color="blue"
                                    size={24}
                                />
                            </TouchableOpacity>
                        ))}
                    </Swiper>
                </View>
                <View style={styles.cardLower}>
                    {pdflink.map((pdf, key) => (
                        <View key={key} style={styles.pdfcard}>
                            <View style={{ marginLeft: 12, width: '60%' }} >
                                <Text style={{ fontSize: 26 }}>pdf link{pdf.material}</Text>
                            </View>
                            {/* <TouchableOpacity onPress={() => { Downloadpdf(pdf) }}
                                style={{ marginRight: 20, width: '12%', alignItems: 'flex-end' }}>
                                <Icon
                                    name='download-outline'
                                    color="blue"
                                    size={24}
                                />
                            </TouchableOpacity> */}
                            <TouchableOpacity onPress={() => navigation.navigate('pdfview', { params: { pdf } })}
                                style={{ marginRight: 20, width: '12%', alignItems: 'flex-end' }}>
                                <Icon
                                    name='book-outline'
                                    color="blue"
                                    size={24}
                                />
                            </TouchableOpacity>

                        </View>

                    ))}
                </View>
            </View>
        </View>
    )
}

export default TopicScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    header: {
        // flex: 2,
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
        alignItems: 'flex-start'

    },
    logout: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 5,
        height: 30,
        width: 55,

    },
    cardUpper: {
        flex: 1,
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 7,
        // alignItems: 'center',
        // padding: 10,
        justifyContent: 'center',
        // borderWidth: 1,

    },
    cardLower: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        marginBottom: 15,
        justifyContent: 'space-around',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'red',
        padding: 18
    },
    pdfcard: {
        // flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 7,
        justifyContent: 'space-between',
        alignItems: 'center',
        // borderWidth: 1,
        width: '100%',
        height: 48.5,
        flexDirection: 'row'
    },
    backgroundVideo: {
        flex: 1,
        // width: 200,
        // height: 200
    },
    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    playButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
    },
    controls: {
        backgroundColor: 'yellow',
        opacity: 0.7,
        borderRadius: 5,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        // flexDirection: 'column'
    },
    progress: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 3,
        overflow: 'hidden',
        // borderWidth:1 
    },
    rateControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    playControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    resizeModeControl: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
