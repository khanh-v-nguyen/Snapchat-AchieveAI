import React, { useRef, useState, useEffect, useCallback } from "react";
import MapView, { Marker } from "react-native-maps";
import {Button, Pressable, Modal, Settings, ScrollView} from 'react-native'
import ModalPopUp from "../components/ModalPopUp.js"
import StudyingStoriesBitmoji from "../components/StudyingStoriesBitmoji.js";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import MySettings from "../screens/NewSettingsScreen.js"
import { StatusBar } from "expo-status-bar";
import Pin from "../components/Pins.js"
import SettingsHeader from "../components/SettingsHeader.js";
import CircleButton from '../components/CircleButtons';


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
  const adam = require("../../assets/bitmojis/annastudy.png")

  const adamCoordinate = { latitude: 34.038240, longitude: -118.440620 }; // Replace with your desired coordinate
  const amelie = require("../../assets/bitmojis/khanhstudy.png")

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
    // setCurrentRegion({ ...currentRegion, latitude: 34.038240, longitude: -118.440620  });
  }

  function friendsHandlePresentModal() {
    friendsBottomSheetModalRef.current?.present();
  }

  const BitmojiMarker = (props) =>
  {
    const doSomething = props.onPress
    
    return (
      <TouchableOpacity onPress={doSomething}>
        <Marker coordinate={props.coords} onPress={doSomething}>
          <Image source={props.source} style={styles.marker}></Image>
        </Marker>
      </TouchableOpacity>
      )
  }

  function MapOptions(props) {
    return (
      <View style={styles.myBitmoji}>
            <Image
              style={styles.bitmojiImage}
              source={require("../../assets/snapchat/personalBitmoji.png")}
            />
            <View style={styles.bitmojiTextContainer}>
              <Text style={styles.bitmojiText}>{props.title}</Text>
            </View>
          </View>
    )
  }

  return (
    <View style={[styles.container, { marginBottom: tabBarHeight }, {
      // Paddings to handle safe area
    },]}>
  
      <BottomSheetModalProvider>

      <MapView
        style={styles.map}
        region={currentRegion}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
      
          <View>
                    
            <StatusBar style="auto"/>
            <BottomSheetModal ref={bottomSheetModalRef} index={0} snapPoints={snapPoints} backgroundStyle={{backgroundColor: "white"}}>
              
              <View style={styles.bottomSheetProfileContainer}>
                <Image style={styles.bottomSheetImageContainer} source={require('../../assets/bitmojis/annastudypfp.png')}/>
                <View style={styles.bottomSheetTextContainer}>
                  <Text style={{fontWeight: 'bold'}}>Anna</Text>
                  <Text style={{color: "gray"}}>Santa Monica, CA 2h • ago</Text>
                </View>
              </View>

              <View style={styles.bottomSheetButtonsContainer}>
              <Pin title="Share Live" color='#51C092' icon="people" iconColor="white"></Pin>
              <Pin title="Pods" color='orange' icon='book' iconColor="white" onTap={()=>setPodsModalVisible(true)}></Pin>
              <Pin color='white' icon="chatbox"></Pin>
              </View>

            </BottomSheetModal>
          </View>

        

        <Marker coordinate={adamCoordinate} onPress={handlePresentModal}>
              <Image source={adam} style={styles.marker}></Image>
        </Marker>

        <Marker coordinate={amelieCoordinate}>
            <Image source={amelie} style={styles.marker}></Image>
        </Marker>
        
      </MapView>

      <BottomSheetModal ref={friendsBottomSheetModalRef} index={0} snapPoints={snapPoints} backgroundStyle={{backgroundColor: "white"}}>
        <Text style={{fontWeight: 'bold'}}>Friends</Text>
        <ScrollView horizontal={true}>
        <CircleButton name="Joshua" username="imjoshua" img={require('../../assets/pfps/Rectangle-5.png')}/>
            <CircleButton name="Will" username="imwill" img={require('../../assets/pfps/Rectangle.png')}/>
            <CircleButton name="Sammy" username="imsammy" img={require('../../assets/pfps/Rectangle-1.png')}/>
            <CircleButton name="Anna" username="imanna" img={require('../../assets/pfps/Rectangle-3.png')}/>
            <CircleButton name="David" username="imdavid"img={require('../../assets/pfps/Rectangle-4.png')}/>
            <CircleButton name="Megha" username="immegha" img={require('../../assets/pfps/Rectangle-2.png')}/>
            <CircleButton name="Khanh" username="imkhanh" img={require('../../assets/pfps/Rectangle-6.png')}/>
        </ScrollView>
        
      </BottomSheetModal>


      <View style={[styles.mapFooter]}>
          
        <View style={[styles.bitmojiContainer, styles.shadow]}>
          <MapOptions title="My Bitmoji"></MapOptions>
          <MapOptions title="Places"></MapOptions>
          <TouchableOpacity onPress={()=>friendsHandlePresentModal()}>
            <MapOptions title="Friends"></MapOptions>
          </TouchableOpacity>
        </View>

      <Modal
      animationType = "slide"
      visible={podsModalVisible}
      transparent={true}
      presentationStyle={"overFullScreen"}
      onRequestClose={()=> {setPodsModalVisible(!podsModalVisible)}}>

        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <Text style={[styles.modalText, {fontSize: 18}]}>Invite Anna to join you in Pods...</Text>
            <Text style={styles.modalText}>__________________________</Text>
            <Text style={styles.modalText}>Start a study group by inviting your friend, Anna. </Text>
            
            <View style={styles.iconShadow}>
              <Image source={require('../../assets/bitmojis/annastudypfp.png')} style={[styles.bottomSheetImageContainer, styles.iconShadow]}></Image>
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setPodsModalVisible(!podsModalVisible)}>
              <Text style={styles.textStyle}>Send Invite</Text>
            </Pressable>

            <Pressable
              onPress={() => setPodsModalVisible(!podsModalVisible)}>
              <Text style={styles.modalText}>Deny</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

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
    width: 150,
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 200,
  },

  bottomSheetContainer: {
    
  },
  bottomSheetProfileContainer:{
    // backgroundColor: "blue",
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  bottomSheetImageContainer: {
    borderRadius: 50,
    width: 70,
    height: 70,
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
  buttonClose: {
    backgroundColor: 'orange',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    margin: 10,
    textAlign: 'center',
    color: "black",
    textAlign: "center",
    fontFamily: "Avenir Next"
  },
  iconShadow: {
    shadowColor:"black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0}, 
  },
  avenir: {
    color: "black",
    textAlign: "center",
    fontFamily: "Avenir Next"
  }
});
