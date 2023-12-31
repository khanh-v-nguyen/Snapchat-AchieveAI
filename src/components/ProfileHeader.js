import { Text, View, StyleSheet, Button, Image } from "react-native";
import { colors } from "../../assets/themes/colors";
import { fontHeader } from "../../assets/themes/font";
import { Followers, More, Search } from "../../assets/snapchat/HeaderIcons";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ProfileHeader({title, destination}) {
    const navigation = useNavigation();
    const goto = destination

    return (
        <View style={styles.container}>
          <View style={styles.headerLeft}>
            <Pressable
              style={[styles.profile, styles.buttons]}
              onPress={() => {
                navigation.navigate(goto);
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
            <View style={[styles.followers, styles.buttons]}>
              <Followers />
            </View>
            <View style={[styles.more, styles.buttons]}>
              <More />
            </View>
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
      backgroundColor: 'transparent',
      
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
  