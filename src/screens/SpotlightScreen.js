import React from "react";
import { Button, View, Text, Image} from "react-native";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useRef } from "react";

import { colors } from "../../assets/themes/colors.js";
import { fontHeader } from "../../assets/themes/font";

import Profile from "../components/StoriesBitmoji.js"
import { ScrollView, StyleSheet} from 'react-native'
import StoriesBitmoji from "../components/StoriesBitmoji.js";
import StudyingStoriesBitmoji from "../components/StudyingStoriesBitmoji.js";

function ProfileIcon() {
  return (
    <View style={styles.myBitmoji}>
      <View style={styles.shadows}> 
      <Image
        style={styles.bitmojiImage}
        source={require("../../assets/snapchat/martina.png")}
      />

      </View>
      
      <View style={styles.bitmojiTextContainer}>
        <Text style={styles.bitmojiText}>Name</Text>
        <Text style={styles.usernameText}>Username</Text>
      </View>
    </View>
  );
}



function StudyingProfile() {
  return (
    <View style={styles.myBitmoji}>
      <View style={styles.shadows}> 
      <Image
        style={styles.bitmojiImage}
        source={require("../../assets/snapchat/martina.png")}
      />

      </View>
      
      <View style={styles.bitmojiTextContainer}>
        <Text style={styles.bitmojiText}>Name</Text>
        <Text style={styles.usernameText}>Username</Text>
      </View>

    </View>


  );
}



export default function SpotlightScreen() {


  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
  }

  const bottomSheetModalRef = useRef(null);
  const snapPoints = ["25%", "50%"];
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>Find Your Friends</Text>
        <ScrollView horizontal={true} contentContainerStyle={{justifyContent: 'space-between'}}>
          <View style={styles.profile}>
          <StudyingStoriesBitmoji name = "Khanh"></StudyingStoriesBitmoji>
          <StudyingStoriesBitmoji name = "Joe"></StudyingStoriesBitmoji>
          <StoriesBitmoji></StoriesBitmoji>
          <StoriesBitmoji></StoriesBitmoji>
          <StoriesBitmoji></StoriesBitmoji>
          <StoriesBitmoji></StoriesBitmoji>
          <StoriesBitmoji></StoriesBitmoji>
          </View>
      </ScrollView>

      <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 20}}>Recent Moves</Text>

      <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 20}}>World Updates</Text>


      <BottomSheetModalProvider>
        
        <Button title="click me friends" onPress={handlePresentModal}></Button>
        <BottomSheetModal ref={bottomSheetModalRef} index={0} snapPoints={snapPoints}>


        </BottomSheetModal>
      </BottomSheetModalProvider>



      </View>
      
    </View>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      width : "100%",
      flex: 1,
      padding: 15
    },
    scroll: {
      justifyContent: 'space-between'
      

    },
    profile: {
      flexDirection: "row",
      marginRight: 50 
    },
    studyStatus: {
      borderWidth:3,
    },

    myBitmoji: {
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5,
      marginBottom: 5,
  
  
    },
    bitmojiImage: {
      width: 60,
      height: 60,
      backgroundColor:"#E6E6E6",
      borderRadius:"50%",
      borderWidth:2,
      borderColor: "blue"
    },
    shadows: {
      shadowColor:"black",
      shadowOpacity: 0.3,
      shadowOffset: { width: 0, height: 0},  
    },
    bitmojiTextContainer: {
      backgroundColor: "white",
      borderRadius: 20,
      padding: 4,
      shadowColor: "black",
      
    },
    bitmojiText: {
      alignSelf: "center",
      fontSize: 12,
      fontWeight: "700",
    },
    usernameText: {
      fontSize: 8,
      fontWeight: "700",
      opacity: 0.5,
    },
    Friends: {
      textAlign: "left",
      paddingLeft: 20,
      paddingBottom: 20,
      color: colors.primary,
      fontSize: fontHeader.fontSize,
      fontFamily: fontHeader.fontFamily,
      fontWeight: fontHeader.fontWeight,
    },

  }
)


