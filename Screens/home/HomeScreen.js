import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SectionList, ScrollView, Dimensions } from 'react-native'
import DefaultPreference from 'react-native-default-preference';
import { AuthContext } from '../context'
const { width, height } = Dimensions.get('window');
import Icon from "react-native-vector-icons/Ionicons";


const HomeScreen = ({ navigation, route }) => {
   console.log('homescreen navigation', route)
   const [modalVisible, setModalVisible] = useState(false);
   const [DATA, setDATA] = useState([
      {
         ID: 1,
         title: "MATHEMATICS",
         data: ["class 12", "class 11", "class 10", "class 9", "class 8", "class 7", "class 6", "class 1 to 5"],
         color: 'red',
         data1: [{
            class12: {
               classId: 12,
               classTitle: 'CLASS 12',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class11: {
               classId: 11,
               classTitle: 'CLASS 11',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class10: {
               classId: 10,
               classTitle: 'CLASS 10',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class9: {
               classId: 9,
               classTitle: 'CLASS 9',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class8: {
               classId: 8,
               classTitle: 'CLASS 8',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class7: {
               classId: 7,
               classTitle: 'CLASS 7',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class6: {
               classId: 6,
               classTitle: 'CLASS 6',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class5: {
               classId: 5,
               classTitle: 'CLASS 5',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class4: {
               classId: 4,
               classTitle: 'CLASS 4',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class3: {
               classId: 3,
               classTitle: 'CLASS 3',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class2: {
               classId: 2,
               classTitle: 'CLASS 2',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class1: {
               classId: 1,
               classTitle: 'CLASS 1',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
         }]
      },
      {
         ID: 2,
         title: "SCIENCE",
         data: ["class 10", "class 9", "class 8", "class 7", "class 6", "class 1 to 5"],
         color: 'green',
         data1: [{
            class12: {
               classId: 12,
               classTitle: 'CLASS 12',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class11: {
               classId: 11,
               classTitle: 'CLASS 11',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class10: {
               classId: 10,
               classTitle: 'CLASS 10',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class9: {
               classId: 9,
               classTitle: 'CLASS 9',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class8: {
               classId: 8,
               classTitle: 'CLASS 8',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class7: {
               classId: 7,
               classTitle: 'CLASS 7',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class6: {
               classId: 6,
               classTitle: 'CLASS 6',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class5: {
               classId: 5,
               classTitle: 'CLASS 5',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class4: {
               classId: 4,
               classTitle: 'CLASS 4',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class3: {
               classId: 3,
               classTitle: 'CLASS 3',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class2: {
               classId: 2,
               classTitle: 'CLASS 2',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class1: {
               classId: 1,
               classTitle: 'CLASS 1',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
         }]
      },

      {
         ID: 12,
         title: "FRENCH",
         data: ["class 12", "class 11", "class 10", "class 9", "class 8", "class 7", "class 6"],
         color: 'gray',
         data1: [{
            class12: {
               classId: 12,
               classTitle: 'CLASS 12',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class11: {
               classId: 11,
               classTitle: 'CLASS 11',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class10: {
               classId: 10,
               classTitle: 'CLASS 10',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class9: {
               classId: 9,
               classTitle: 'CLASS 9',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class8: {
               classId: 8,
               classTitle: 'CLASS 8',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class7: {
               classId: 7,
               classTitle: 'CLASS 7',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
            class6: {
               classId: 6,
               classTitle: 'CLASS 6',
               details: 'ncert book CBSE SYLLABUS',
               pdf_link: ['url_1', "url_2", "url_3", 'url_4'],
               video_link: {
                  video_1: '',
                  video_2: '',
                  video_3: ''
               },
               image: '',
            },
         }]
      },
   ])
   const { signOut } = React.useContext(AuthContext);

   const Item = ({ title }) => (
      <View style={styles.item}>
         <Text style={styles.title}>{title}</Text>
      </View>
   );

   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <View style={{ flex: 2 }}>
               <TouchableOpacity
                  onPress={() => navigation.toggleDrawer()}
                  style={styles.menu}
               >
                  {/* <Text style={{}}>LogOut</Text> */}
                  <Icon
                     name='menu-outline'
                     color="blue"
                     size={35}
                  />
               </TouchableOpacity>
            </View>
            <View style={{ flex: 8, alignItems: 'center', justifyContent: 'center' }}>
               <Text style={{ fontSize: 25 }}>{route.params.params.data}</Text>
            </View>
            <View style={{ flex: 2 }}>
               <TouchableOpacity
                  onPress={() => signOut()}
                  style={styles.logout}
               >
                  {/* <Text style={{}}>LogOut</Text> */}
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
                        <Text style={styles.title}>{value.title}{console.log(value.data1[0])}</Text>
                     </View>
                     <ScrollView showsVerticalScrollIndicator={false} horizontal={true}>
                        <View style={{ flexDirection: 'row' }}>
                           {Object.values(value.data1[0]).map((item, key) => (
                              <TouchableOpacity key={key} style={[styles.item, { backgroundColor: value.color, borderWidth: 1, marginTop: 60 }]}>
                                 <View style={{}}>
                                    <View style={styles.innerbox}>
                                       <Text>{item.classTitle}</Text>
                                    </View>
                                    <View style={{}}>
                                       <Text>{item.pdf_link}</Text>
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
   item: {
      // borderWidth: 1,
      justifyContent: 'center',
      height: 180,
      width: 280,
      borderRadius: 10,
      flexDirection: 'row',
      alignContent: 'space-between',
      backgroundColor: "#f9c2ff",
      // padding: 25,
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
      // borderWidth: 1,
      borderColor: 'red',
      // flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: 'red',
      borderRadius: 10,
      // marginRight: -5,
      marginTop: 10,
      marginLeft: 10,
      height: 30,
      width: 55,

   },
   logout: {
      // borderWidth: 1,
      // flex: 2,
      alignItems: 'flex-end',
      justifyContent: 'center',
      // backgroundColor: 'red',
      borderRadius: 10,
      // marginRight: -5,
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
      // borderWidth: 1,
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
      borderWidth: 1,
      // width: "100%",
      width: 240,
      height: 120,
      marginTop: -60,
      borderRadius: 5,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
   }
});