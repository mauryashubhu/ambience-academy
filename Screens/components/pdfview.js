import React, { useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'

import PDFView from 'react-native-view-pdf';


const pdfViewScreen = ({ route, navigation }) => {
    console.log(' pdfki screen ', navigation, route)
    const [isLoading, setIsLoading] = useState(true);
    const resourceType = route.params.params.pdf.link

    // if(isLoading){
    //     setTimeout(()=>{
    //         return(
    //             <View><Text>loding........</Text></View>
    //         )
    //     },2000)
        
    // }else
     return (
        <View style={{ flex: 1 }}>
            <Text>PDF PAGE</Text>
            <View style={{ flex: 1 }}>
                {/* Some Controls to change PDF resource */}
                <PDFView
                    fadeInDuration={0}
                    style={{ flex: 1 }}
                    resource={resourceType}
                    onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
                    onError={(error) => alert('Cannot render PDF', error)}
                />
            </View>
        </View>
    )
}

export default pdfViewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});