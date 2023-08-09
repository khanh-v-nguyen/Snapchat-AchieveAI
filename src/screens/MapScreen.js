import React, { useRef, useState, useEffect, useCallback } from "react";
import MapView, { Marker } from "react-native-maps";
import {Button, Pressable, Modal, Settings, ScrollView} from 'react-native'
import ModalPopUp from "../components/ModalPopUp.js"
import StudyingStoriesBitmoji from "../components/StudyingStoriesBitmoji.js";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import MySettings from "../screens/NewSettingsScreen.js"
import { StatusBar } from "expo-status-bar";
import MapOptions from "../components/MapOptions.js";
import Pin from "../components/Pins.js"
import SettingsHeader from "../components/SettingsHeader.js";

import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Location from "expo-location";
import Ionicons from "react-native-vector-icons/Ionicons";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps/index.js";

export default function MapScreen({ navigation }) {
  const tabBarHeight = useBottomTabBarHeight();
  const insets = useSafeAreaInsets();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);



  const [currentRegion, setCurrentRegion] = useState({
    latitude: 34.0211573,
    longitude:  -118.4503864,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setCurrentRegion({
        latitude: 34.0211573,
        longitude: -118.4503864,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  let text = "Waiting...";
  text = JSON.stringify(location);


  const amelieCoordinate = { latitude: 34.0211573, longitude: -118.4503864, }; // Replace with your desired coordinate
  const adam = require("../../assets/snapchat/adam.png")

  const adamCoordinate = { latitude: 34.038240, longitude: -118.440620 }; // Replace with your desired coordinate
  const amelie = require("../../assets/snapchat/amelie.png")

  const [selectedCoordinate, setSelectedCoordinate] = useState({adamCoordinate})

  //MODAL 
  const [modalVisible, setModalVisible] = useState(false);
  const [podsModalVisible, setPodsModalVisible] = useState(false);

  //BOTTOM SHEET WHEN YOU CLICK ON MAP BITMOJI
  const bottomSheetModalRef = useRef(null);
  const snapPoints = ["25%"];

  //BOTTOM SHEET FOR FRIENDS
  const friendsBottomSheetModalRef = useRef(null);

  
  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setCurrentRegion({ ...currentRegion, latitude: 34.038240, longitude: -118.440620  });
  }

  function friendsHandlePresentModal() {
    friendsBottomSheetModalRef.current?.present();
  }

  const test = () => {
    console.log('function works')
  }

  const BitmojiMarker = (props) =>
  {
    const doSomething = props.onPress
    return (
      <TouchableOpacity>
              <Marker coordinate={adamCoordinate} onPress={doSomething} title={"Adam is open to pods!"} description={props.description}>
                <Image source={adam} style={styles.marker}></Image>
              </Marker>
      </TouchableOpacity>
      )
  }

 

  // function BitmojiMarker({props}) {
  //   return (
  //   <TouchableOpacity>
  //           <Marker coordinate={adamCoordinate} onPress={props.onPress} title={"Adam is open to pods!"} description={"Adam is currently studying mathematics."}>
  //             <Image source={adam} style={styles.marker}></Image>
  //           </Marker>
  //   </TouchableOpacity>
  //   )
  // }

  return (
    <View style={[styles.container, { marginBottom: tabBarHeight }, {
      // Paddings to handle safe area
      paddingTop: insets.top + 200,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      marginBottom: tabBarHeight,
    },]}>

      <SettingsHeader title="Map"></SettingsHeader>
  

      <BottomSheetModalProvider>

      <MapView
        style={styles.map}
        region={currentRegion}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
      
          <View>
          
          {/* <BitmojiMarker onPress={test} description="Megha"></BitmojiMarker> */}

          <TouchableOpacity>
              <Marker coordinate={adamCoordinate} onPress={handlePresentModal} title={"Adam is open to pods!"} description={"Adam is currently studying mathematics."}>
                <Image source={adam} style={styles.marker}></Image>
              </Marker>
          </TouchableOpacity>


            <StatusBar style="auto"/>
            <BottomSheetModal ref={bottomSheetModalRef} index={0} snapPoints={snapPoints} backgroundStyle={{backgroundColor: "white"}}>
              
              <View style={styles.bottomSheetProfileContainer}>
                <Image style={styles.bottomSheetImageContainer} source={require('../../assets/snapchat/adampfp.png')}/>
                <View style={styles.bottomSheetTextContainer}>
                  <Text style={{fontWeight: 'bold'}}>Adam</Text>
                  <Text style={{color: "gray"}}>Santa Monica, CA 2h • ago</Text>
                </View>
              </View>

              <View style={styles.bottomSheetButtonsContainer}>
              <Pin title="Available for Study" color='orange'></Pin>

                <TouchableOpacity onPress={()=> {setPodsModalVisible(true)}}>
                  <Pin title="Pods" color='white' ></Pin>
                </TouchableOpacity>

              <Pin title="Chat" color='white'></Pin>
              </View>

            </BottomSheetModal>
          </View>

        <Marker coordinate={amelieCoordinate} onPress={e => console.log("I am amelie Bitmoji!")}>
            <Image source={amelie} style={styles.marker}></Image>
          </Marker>
        
      </MapView>


      <View style={[styles.mapFooter]}>
        <View style={styles.locationContainer}>
          <TouchableOpacity
            style={[styles.userLocation, styles.shadow]}
            onPress={() => {
              console.log("Go to user location!");
              const { latitude, longitude } = location.coords;
              console.log(latitude)
              console.log(longitude)

              setCurrentRegion({ ...currentRegion, latitude, longitude  });
            }}
          >
            <Ionicons name="ios-navigate" size={15} color="black" />
          </TouchableOpacity>
        </View>
        <View>
        </View>
      
        <View style={[styles.bitmojiContainer, styles.shadow]}>

          <MapOptions></MapOptions>
          <MapOptions></MapOptions>

          <MapOptions></MapOptions>


          {/* <View style={styles.myBitmoji}>
            <Image
              style={styles.bitmojiImage}
              source={require("../../assets/snapchat/personalBitmoji.png")}
            />
            <View style={styles.bitmojiTextContainer}>
              <Text style={styles.bitmojiText}>My Bitmoji</Text>
            </View>
          </View>
          <View style={styles.places}>
            <Image
              style={styles.bitmojiImage}
              source={require("../../assets/snapchat/personalBitmoji.png")}
            />
            <View style={styles.bitmojiTextContainer}>
              <Text style={styles.bitmojiText}>Places</Text>
            </View>
          </View> */}

          <BottomSheetModal ref={friendsBottomSheetModalRef} index={0} snapPoints={snapPoints}>

            <Text style={{fontWeight: 'bold', fontSize: 15}}>Find Your Friends</Text>
            <ScrollView horizontal={true} contentContainerStyle={{justifyContent: 'space-between'}}>
              <View style={{flexDirection: "row"}}>
              <StudyingStoriesBitmoji name = "Khanh"></StudyingStoriesBitmoji>
              <StudyingStoriesBitmoji name = "Joe"></StudyingStoriesBitmoji>
              </View>
          </ScrollView>
          </BottomSheetModal>

            
          {/* <Pressable>
            <TouchableOpacity onPress={friendsHandlePresentModal}>
                <View style={styles.myFriends}>
                <Image
                  style={styles.bitmojiImage}
                  source={require("../../assets/snapchat/personalBitmoji.png")}
                />
                <View style={styles.bitmojiTextContainer}>
                  <Text style={styles.bitmojiText}>Friends</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Pressable> */}


 
        </View>

      <Modal
      animationType = "slide"
      visible={podsModalVisible}
      transparent={true}
      presentationStyle={"overFullScreen"}
      onRequestClose={()=> {setPodsModalVisible(!podsModalVisible)}}>

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Invite Adam to join you in Pods...</Text>
            <Text style={styles.modalText}>__________________________</Text>
            <Text style={styles.modalText}>Start a group study by inviting your friend, Adam. </Text>
            


            <View style={styles.iconShadow}>
              <Image source={require('../../assets/snapchat/adampfp.png')} style={[styles.bottomSheetImageContainer, styles.iconShadow]}>
            </Image>
            
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setPodsModalVisible(!podsModalVisible)}>
              <Text style={styles.textStyle}>Send Invite</Text>
            </Pressable>

            <Pressable
            
              
              onPress={() => setPodsModalVisible(!podsModalVisible)}>
              <Text >Deny</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setPodsModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>


      <Modal
        animationType="slide"
        // transparent={true}
        visible={modalVisible}
        presentationStyle="fullScreen"
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View>

          
        </View>
        {/* <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Study mode!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View> */}
        <MySettings></MySettings>
        <Button title="hey close this tab!" onPress={()=>setModalVisible(!modalVisible)}></Button>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
        
      </View>

      </BottomSheetModalProvider>



    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapFooter: {
    width: "100%",
    display: "flex",
    // flexDirection: "column",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
    bottom: 0,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  locationContainer: {
    backgroundColor: "transparent",
    width: "100%",
    paddingBottom: 8,
    alignItems: "center",
  },
  userLocation: {
    backgroundColor: "white",
    borderRadius: 100,
    height: 36,
    width: 36,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  shadow: {
    shadowColor: "rgba(0, 0, 0)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
    elevation: 4,
  },
  bitmojiContainer: {
    width: "100%",
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  myBitmoji: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
  },
  bitmojiImage: {
    width: 50,
    height: 50,
  },
  bitmojiTextContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 4,
  },
  bitmojiText: {
    fontSize: 10,
    fontWeight: "700",
  },
  places: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  myFriends: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  bitmojiAdam: {
    height: 200,
    width: 100
  },
  markerImage: {
    width: 40, // Adjust the width of the marker image
    height: 40, // Adjust the height of the marker image
  },
  marker: {
    height: 150,
    width: 70,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  bottomSheetContainer: {
    
  },
  bottomSheetProfileContainer:{
    // backgroundColor: "blue",
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  bottomSheetImageContainer: {
    borderRadius: '50%',
    width: 60,
    height: 60,
    backgroundColor: 'white',
    margin: 5,
    

  },
  bottomSheetTextContainer: {
    flexDirection: 'column',
    
  },
  bottomSheetButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'

  },
  bottomSheetButtons: {
    backgroundColor: "red",
    borderRadius: '50%'
  },





  modalView: {
    marginTop: 50,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  iconShadow: {
    shadowColor:"black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0}, 
  },


  profile: {
    flexDirection: "row",
    alignContent: "flex-start"
  },
});
