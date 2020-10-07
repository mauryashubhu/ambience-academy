import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, TouchableHighlight, Dimensions } from 'react-native'
import { AuthContext } from '../context'
import Icon from "react-native-vector-icons/Ionicons";
// import NetInfo from "@react-native-community/netinfo";

var { width, height } = Dimensions.get('window');


const HomeScreen = ({ navigation, route }) => {
   console.log('homescreen navigation', route)
   // const [netCheck, setNetCheck] = useState(false);
   const [modalData, setModalData] = useState({ isOpen: false, selectedItem: null })
   const [DATA, setDATA] = useState([
      {
         ID: 1,
         title: "MATHEMATICS",
         color: 'red',
         data1: [{
            class12: {
               classId: 12,
               classTitle: 'CLASS 12',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class11: {
               classId: 11,
               classTitle: 'CLASS 11',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class10: {
               classId: 10,
               classTitle: 'CLASS 10',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class9: {
               classId: 9,
               classTitle: 'CLASS 9',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class8: {
               classId: 8,
               classTitle: 'CLASS 8',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class7: {
               classId: 7,
               classTitle: 'CLASS 7',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class6: {
               classId: 6,
               classTitle: 'CLASS 6',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class5: {
               classId: 5,
               classTitle: 'CLASS 5',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class4: {
               classId: 4,
               classTitle: 'CLASS 4',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class3: {
               classId: 3,
               classTitle: 'CLASS 3',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class2: {
               classId: 2,
               classTitle: 'CLASS 2',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class1: {
               classId: 1,
               classTitle: 'CLASS 1',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
         }]
      },
      {
         ID: 2,
         title: "SCIENCE",
         color: 'green',
         data1: [{
            class12: {
               classId: 12,
               classTitle: 'CLASS 12',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class11: {
               classId: 11,
               classTitle: 'CLASS 11',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class10: {
               classId: 10,
               classTitle: 'CLASS 10',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class9: {
               classId: 9,
               classTitle: 'CLASS 9',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class8: {
               classId: 8,
               classTitle: 'CLASS 8',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class7: {
               classId: 7,
               classTitle: 'CLASS 7',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class6: {
               classId: 6,
               classTitle: 'CLASS 6',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class5: {
               classId: 5,
               classTitle: 'CLASS 5',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class4: {
               classId: 4,
               classTitle: 'CLASS 4',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class3: {
               classId: 3,
               classTitle: 'CLASS 3',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class2: {
               classId: 2,
               classTitle: 'CLASS 2',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class1: {
               classId: 1,
               classTitle: 'CLASS 1',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
         }]
      },
      {
         ID: 12,
         title: "FRENCH",
         color: 'gray',
         data1: [{
            class12: {
               classId: 12,
               classTitle: 'CLASS 12',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class11: {
               classId: 11,
               classTitle: 'CLASS 11',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class10: {
               classId: 10,
               classTitle: 'CLASS 10',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class9: {
               classId: 9,
               classTitle: 'CLASS 9',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class8: {
               classId: 8,
               classTitle: 'CLASS 8',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class7: {
               classId: 7,
               classTitle: 'CLASS 7',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
            class6: {
               classId: 6,
               classTitle: 'CLASS 6',
               details: 'ncert book CBSE SYLLABUS',
               topics: [{
                  topicID: 1,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 2,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 3,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },
               {
                  topicID: 4,
                  topicImage: '',
                  topiclinks: [{ pdfLink: [], videoLink: [] }]
               },]
            },
         }]
      },
   ])
   const { signOut } = React.useContext(AuthContext);


   // useEffect(() => {
   //    // return () => {
   //    //To get the network state once
   //    NetInfo.fetch().then(state => {
   //       console.log(
   //          'Connection 1: ' +
   //          state.type +
   //          ', Is connected1?: ' +
   //          state.isConnected);
   //       setNetCheck(state.isConnected);
   //    });

   //    //Subscribe to network state updates
   //    const unsubscribe = NetInfo.addEventListener(state => {
   //       console.log(
   //          'Connection type: ' +
   //          state.type +
   //          ', Is connected?: ' +
   //          state.isConnected);
   //    });

   //    //To Unsubscribe the network state update
   //    // unsubscribe();
   //    // }
   // }, [NetInfo])


   // const internet = () => {
   //    alert(netCheck ? 'internet connected' : 'internet not connected')
   // }


   return (
      <View style={styles.container}>
         <View style={styles.header}>
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
               <Text style={{ fontSize: 25 }}>homescreen</Text>
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
         <View style={{ flex: 8 }}>
            <ScrollView showsVerticalScrollIndicator={false} >
               {DATA.map((value, key) => (
                  <View style={styles.block} key={key}>
                     <View >
                        <Text style={styles.title}>{value.title}
                           {console.log(value.data1[0])}
                        </Text>
                     </View>
                     <ScrollView showsVerticalScrollIndicator={false} horizontal={true}>
                        <View style={{ flexDirection: 'row' }}>
                           {Object.values(value.data1[0]).map((item, key) => (
                              <TouchableOpacity
                                 key={key}
                                 onPress={() => setModalData({ isOpen: true, selectedItem: item })}
                                 style={[styles.item, { backgroundColor: value.color, marginTop: 60 }]}>
                                 <View style={{}}>
                                    <View style={styles.innerbox}>
                                       <Text>{item.classTitle}</Text>
                                    </View>
                                    <View style={{}}>
                                       <Text>{item.classId}</Text>
                                       <Text>{item.details}</Text>
                                    </View>

                                 </View>
                              </TouchableOpacity>
                           ))}
                        </View>
                     </ScrollView>
                  </View>
               ))}
            </ScrollView>
         </View>
         {modalData.isOpen && <ModalScreen
            modalVisible={modalData.isOpen}
            item={modalData.selectedItem}
            onClose={() => setModalData({ isOpen: false, selectedItem: null })}
            navigation={navigation} />}
      </View>
   )
}

const ModalScreen = (props,) => {
   // const isVisible={props.isVisible}
   console.log('madal items:', props,)
   return (
      <View style={styles.centeredView}>
         <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalvisible}
            onRequestClose={() => {
               props.onClose()
               console.log("Modal has been closed.");
            }}>

            <View style={styles.centeredView}>
               <View style={styles.modalheader}>
                  <TouchableOpacity
                     onPress={() => internet()}
                     style={{ flex: 8, alignItems: 'center', justifyContent: 'center' }}>
                     {/* <Text style={{ fontSize: 25 }}>{data.details}</Text> */}
                  </TouchableOpacity>
                  <View style={{ flex: 2, alignContent: 'flex-end', marginRight: -15, marginTop: -5 }}>
                     <TouchableOpacity
                        onPress={() => props.onClose()}
                        style={styles.modalclose}
                     >
                        {/* <Text style={{}}>LogOut</Text> */}
                        <Icon
                           name='close-outline'
                           color="blue"
                           size={24}
                        />
                     </TouchableOpacity>
                  </View>
               </View>
               <View style={{ flex: 1, }}>
                  {props.item.topics.map((value, key) => (
                     <TouchableOpacity style={styles.modalView} key={key}
                        onPress={() => {
                           props.onClose();
                           props.navigation.navigate('topic', {
                              topic: value
                           })
                        }} >
                        <Text style={styles.modalText}>topicID : {value.topicID}</Text>
                     </TouchableOpacity>
                  ))
                  }
               </View>
            </View>
         </Modal>
      </View>
   )
}

export default HomeScreen


const styles = StyleSheet.create({
   container: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: '#fff'
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
   modalheader: {
      borderRadius: 10,
      height: 50,
      alignSelf: 'stretch',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'white',
   },
   modalclose: {
      alignItems: 'flex-end',
      justifyContent: 'center',
      borderRadius: 10,
      marginTop: 10,
      marginLeft: 5,
      height: 30,
      width: 55,
      marginRight: 20
   },
   item: {
      justifyContent: 'center',
      height: 180,
      width: 280,
      borderRadius: 10,
      flexDirection: 'row',
      alignContent: 'space-between',
      backgroundColor: "#f9c2ff",
      paddingLeft: 25,
      paddingRight: 25,
      marginVertical: 8,
      marginLeft: 15,
      marginRight: 15,
      shadowOpacity: 0.6,
      shadowRadius: 2,
      shadowColor: 'blue',
      shadowOffset: { height: 1, width: 1 },
      elevation: 3,
      backgroundColor: 'white',
      borderRadius: 6,

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
      alignItems: 'flex-end',
      justifyContent: 'center',
      borderRadius: 10,
      marginTop: 10,
      marginLeft: 5,
      height: 30,
      width: 55,

   },
   title: {
      fontSize: 20,
      marginTop: 15,
      marginLeft: 10,
      fontWeight: 'bold'
   },
   block: {
      shadowOpacity: 0.5,
      shadowRadius: 2,
      shadowColor: 'blue',
      shadowOffset: { height: 1, width: 1 },
      elevation: 3,
      backgroundColor: '#fff',
      borderRadius: 6,
      marginBottom: 10,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 30,
      height: 300,
      marginHorizontal: 4,
      marginVertical: 6
   },
   innerbox: {
      borderWidth: 0.4,
      width: 260,
      height: 70,
      marginTop: -60,
      borderRadius: 50,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
   },
   centeredView: {
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
      elevation: 7
   },
   modalView: {
      // borderWidth: 1,
      borderColor: 'red',
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 5
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
   },
   openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
   },
   textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
   },
   modalText: {
      marginBottom: 15,
      textAlign: "center"
   }
});