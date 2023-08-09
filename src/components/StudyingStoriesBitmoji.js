import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { fontHeader } from "../../assets/themes/font";
import { colors } from "../../assets/themes/colors";
// import StoriesBitmoji from "../components/StoriesBitmoji";

import Header from "../components/Header";

export default function StoriesBitmoji(props) {
  const [name, setName] = useState(props.name)

  return (
    <View style={styles.myBitmoji}>
      <View style={styles.shadows}> 
      <Image
        style={styles.bitmojiImage}
        source={require("../../assets/snapchat/martina.png")}
      />

      </View>
      
      <View style={styles.bitmojiTextContainer}>
        <Text style={styles.bitmojiText}>{name}</Text>
        {/* <View style={{height: 5, width: 5, backgroundColor: "green", borderRadius: "50%"}}></View> */}
        <Text style={styles.usernameText}>Studying</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    // backgroundColor: "white",
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
});
