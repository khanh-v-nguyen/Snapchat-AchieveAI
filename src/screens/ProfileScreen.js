import ProfileBox from "../components/ProfileBox.js"
import GhostModeBox from "../components/GhostModeBox.js"
// import ProfilePage from "../assets/snapchat/profilepage.js"
import { Dimensions, ImageBackground } from "react-native";
import { Modal, Button, Image , Text, StyleSheet, Box, View, ScrollView} from "react-native";
// import barcode from "./education/assets/snapchat-logo.png"
import ChatComponent from "../components/ChatComponent.js"
import ModalPopUp from "../components/ModalPopUp.js"
import MySettings from "../screens/NewSettingsScreen.js"
import Ionicons from "react-native-vector-icons/Ionicons";
import ProfileHeader from "../components/ProfileHeader.js";

import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { StatusBar } from "expo-status-bar";
import React, { useRef, useState, useEffect, useCallback } from "react";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ProfileScreen(){
    const [isVisible, setIsVisible] = useState(false)
    
    const bottomSheetModalRef = useRef(null)
    const snapPoints = ["75%", "100%"]
    function handlePresentModal() {
        bottomSheetModalRef.current?.present();
    }

    function Pin(props) {
        return(
            <View style={{backgroundColor: '#ECECEE', borderRadius: '50', alignItems:'center', margin: 5, padding:10}}>
                {/* <Image source={require()}></Image> */}
                <Text style={styles.pinText}>{props.name}</Text>
            </View>
        );
    }

    function SnapMap(props) {
        return (
            <View style={{ marginTop: 10, marginBottom: 10, borderRadius: 20, shadowOpacity: 0.2, shadowOffset:{width: 1, height: 1} ,backgroundColor:'white'}}>

            <Image style={{height: 120, width: '100%', alignSelf: 'stretch'}} source={require("../../assets/snapchat/GhostModeMap2.png")}></Image>
                {/* <Image style={{height: "auto", width: "auto", resizeMode: 'stretch'}} source={require("../../assets/snapchat/GhostModeMap.jpg")}></Image> */}


                    <View style={{flexDirection:'row' , justifyContent:'space-between', alignItems: 'center', borderBottomWidth: 0.5, borderColor: "#828385"}}>
                    
                       <View style={{flexDirection:'row'}}>
                           <Ionicons name="ios-location" size={30} style={{padding:16}}color="black" />

                           <View style={{justifyContent: 'center'}}>
                                <Text style={{
                                    fontFamily: "Avenir Next",
                                    fontSize: 16,
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: 24,
                                    
                                    }}>Not Sharing Location</Text>
                                <Text>Ghost Mode</Text>
                           </View>
                       </View>

                       <Ionicons name="arrow-forward" size={30} color="black" />
                       

                   </View>

                   <View style={{flexDirection:'row' , justifyContent:'space-between', alignItems: 'center'}}>
                    
                       <View style={{flexDirection:'row'}}>
                           <Ionicons name="ios-location" size={30} style={{padding:16}}color="black" />

                           <View style={{justifyContent: 'center'}}>
                                <Text style={{
                                    fontFamily: "Avenir Next",
                                    fontSize: 16,
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: 24,
                                    
                                    }}>Not Available for Pods</Text>
                                <Text>Study Mode</Text>
                           </View>
                       </View>

                       <Ionicons name="arrow-forward" size={30} color="black" />

                   </View>

            </View>

        )
    }

    function SimpleBox (props) {
        return (
            <View style={{ marginTop: 10, marginBottom: 10, borderRadius: 20, shadowOpacity: 0.2, shadowOffset:{width: 1, height: 1} ,backgroundColor:'white'}}>


            <View style={{flexDirection:'row' , justifyContent:'space-between', alignItems: 'center'}}>
                    
                       <View style={{flexDirection:'row'}}>
                           <Ionicons name="ios-location" size={30} style={{padding:16}}color="black" />

                           <View style={{justifyContent: 'center'}}>
                                <Text style={{
                                    fontFamily: "Avenir Next",
                                    fontSize: 16,
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: 24,
                                    
                                    }}>{props.title}</Text>
                                {/* <Text>{props.description}</Text> */}
                           </View>
                       </View>

                       <Ionicons name="arrow-forward" size={30} color="black" />

                   </View>

            </View>
        );
    }


    return(
        <View style={styles.container}>
            <ProfileHeader title="" destination="Chat"></ProfileHeader>

            <Image source={require("../../assets/snapchat/ProfileBackground.png")}>
                
            </Image>

            <BottomSheetModalProvider>
                <View>
                <Button title="present modal" onPress={handlePresentModal}/>
                <StatusBar style="auto"/>
                <BottomSheetModal ref={bottomSheetModalRef} index={0} snapPoints={snapPoints} style={styles.bottomSheetContainer}>

                    <ScrollView vertical={true} >
                        <View style={styles.bottomSheetContentContainer}>
                            

                            {/* <Modal 
                            animationType="slide"
                            visible={isVisible}>
                                
                                <Button title="Close Settings" onPress={()=>setIsVisible(false)}></Button>

                            </Modal>

                            <Button title="Click to open settings" onPress={()=>setIsVisible(true)}></Button> */}

                            <View style={{flexDirection: 'row', alignItems:'center'}}>
                                <Image style={{width:70, height: 70, margin: 5}} source={require("../../assets/snapchat-logo.png")}/>
                                <View style={{margin:5}}>
                                    <Text style={{fontWeight: 500, fontSize: '24', fontFamily: "Avenir Next"}}>Wendy Zhang</Text>
                                    <Text>wendyzhang</Text>
                                </View>
                            </View>

                            <View style={{flexDirection: 'row'}}>
                                <Pin image="../../assets/snapchat/defaultprofile.png" name="Available for Pods"></Pin>
                                <Pin image="../../assets/snapchat/defaultprofile.png" name="1,709"></Pin>
                                <Pin image="../../assets/snapchat/defaultprofile.png" name="Libra"></Pin>
                            </View>


                            <View>
                                <Text style={styles.labelText}>Snap Maps</Text>
                                <SnapMap></SnapMap>

                                <Text style={styles.labelText}>My Tokens</Text>
                                <SimpleBox title="0"></SimpleBox>
                                <Text style={{alignSelf: 'center'}}>Joined Snapchat on March 19, 2019</Text>
                                {/* <Button title="back to chat screen" onPress={navigation.navigate()}></Button> */}

                                <View>

                                    <View>

                                        
                                    </View>

                                    <View>

                                        
                                    </View>


                                </View>


                            </View>

                            
                            

                        </View>
                    </ScrollView>
                    
                </BottomSheetModal>
                </View>
            
            </BottomSheetModalProvider>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: 'center',        
    },
    image: {
        width: "100%", 
    },
    bottomSheetContainer: {
        borderRadius: "20%",

    },
    bottomSheetContentContainer: {
        flex: 1,
        margin: 12,

    },
    settingsModal: {
        height: 300
    },
    labelText: {
        fontFamily: "Avenir Next",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: '600',
        lineHeight: 24,
        color: "#1A1A1B",
    },
    pinText: {
        color:  "#313132",
        textAlign: "right",
        leadingTrim: "both",
        textEdge: "cap",
        /* Button/Button Small */
        fontFamily: "Avenir Next",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: 16, /* 133.333% */
    }


})


