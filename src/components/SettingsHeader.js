import { Text, View, StyleSheet, Button, Image, TouchableOpacity, Modal} from "react-native";
import { useState } from "react";
import { colors } from "../../assets/themes/colors";
import { fontHeader } from "../../assets/themes/font";
import { Followers, More, Search } from "../../assets/snapchat/HeaderIcons";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MySettings from "../screens/NewSettingsScreen.js"
import StudyPodsScreen from "../screens/StudyPodsScreen";

export default function SettingsHeader({title, destination, onTap}) {
    const navigation = useNavigation();
    const goto = destination

    const SettingsModal = () => {
        return (
            <Text>Hii</Text>
        );
    }

    function SayHi() {
        console.log('hi')
    }

    const [modalVisible, setModalVisible] = useState(false)
    const [podsModalVisible, setPodsModalVisible] = useState(false)

    

    return (
        <View style={styles.container}>
          <View style={styles.headerLeft}>
            <Pressable
              style={[styles.profile, styles.buttons]}
              onPress={() => {
                console.log("prof clicked");
              }}
            >
              <Image
                style={styles.profileImage}
                source={require("../../assets/snapchat/defaultprofile.png")}
              />
            </Pressable>
            <View style={[styles.search, styles.buttons]}>
              <Search />
            </View>
          </View>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.headerRight}>

            <TouchableOpacity onPress={()=>setPodsModalVisible(true)} style={[styles.followers, styles.buttons]}>
              <Followers />
            </TouchableOpacity>

            <TouchableOpacity onPress={onTap} style={[styles.more, styles.buttons]}>
              <More />
            </TouchableOpacity>

          </View>
        </View>

        
      );
}


const styles = StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
      paddingHorizontal: 12,
      paddingVertical: 8,
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      textAlign: "center",
      color: colors.primary,
      fontSize: fontHeader.fontSize,
      fontFamily: fontHeader.fontFamily,
      fontWeight: fontHeader.fontWeight,
    },
    headerLeft: {
      flexDirection: "row",
      gap: 8,
    },
    headerRight: {
      flexDirection: "row",
      gap: 8,
    },
    buttons: {
      borderRadius: 100,
      height: 44,
      width: 44,
      backgroundColor: colors.interactionGraySubtle,
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    },
    profileImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  });
  