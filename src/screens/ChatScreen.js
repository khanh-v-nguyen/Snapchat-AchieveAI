import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase";
import { fontHeader } from "../../assets/themes/font";

import Header from "../components/Header";
import { CHATBOTS } from "./ConversationScreen";

export default function ChatScreen({ navigation }) {
  const [chats, setChats] = useState([]);
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();
  const images = useState([
    "https://s3-alpha-sig.figma.com/img/8093/7dd8/28c6a5154bf5fe4eb25a9fc99a472614?Expires=1692576000&Signature=QB~XR21LBd~l8mLT2bL1cIduRsnMVNTk1tRdFZrbo9H47uCsU7w-QEQz6hpXzueADlN3oB7A6xRxe4psDtzM3NYN2-j~EjDEhlozUtkbSkQqj6shuDhliUGT1cSndg0G8AZHiDmJsr2USMdWfnx0868WNNGPS7XD9TToO0Hgn8thtUTDeD7pAtdE1mBlMfcWPD7dytaNa27CIw-wNwvtrNp7Ba9ljo~0GIvETb~ets9EK8AF2pZgIlEIQX-yQjn4mdwV4~4iJzDfxW5ImVIa2sltDWiR2pLuV-CGfmMzDJMDwXvabddcHZ3sMVo0WCz5lI6wiuND4ECEq3vkaJgHHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  ]);

  function getChatbots() {
    // add the chatbots to an array
    let chatbotsTemp = [];
    for (const botId in CHATBOTS) {
      chatbotsTemp.push({ isChatbot: true, chatId: botId });
      // console.log("adding bot", bot);
    }

    //add them to our list of chats
    setChats((otherChats) => [...otherChats, ...chatbotsTemp]);
  }

  async function getUserChats() {
    // get all of the "user chats" from firebase
    const querySnapshot = await getDocs(collection(db, "Chats"));

    // add the user chats to an array
    let userChatsTemp = [];
    querySnapshot.forEach((userChat) => {
      userChatsTemp.push({ isChatbot: false, chatId: userChat.id });
    });

    //add them to our list of chats
    setChats((otherChats) => [...otherChats, ...userChatsTemp]);
  }

  useEffect(() => {
    // if we already have our chats loaded, don't get them again
    if (chats.length < 1) {
      getChatbots();
      getUserChats();
    }
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          // Paddings to handle safe area
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          marginBottom: tabBarHeight,
        },
      ]}
    >
      <Header title="Chat" />
      <View>
        <TouchableOpacity style={styles.userButton}>
          <Image
            style={styles.pin}
            source={require("./pin.png")} // Provide the path to your user image
          />
          <Image
            style={styles.header}
            source={require("./header.png")} // Provide the path to your user image
          />
        </TouchableOpacity>
        {chats?.map((chat) => {
          return (
            <View>
              <TouchableOpacity
                style={styles.userButton}
                onPress={() => {
                  navigation.navigate("Achieve AI", {
                    isChatbot: chat.isChatbot,
                    chatId: chat.chatId,
                  });
                }}
                key={chat.chatId}
              >
                <Ionicons
                  style={styles.imageBackground}
                  name="ellipse"
                  size={42}
                  color="lightgrey"
                />
                <Image
                  style={styles.userImage}
                  source={images[0]} // Provide the path to your user image
                />

                {/* This could be updated to get an actual name */}
                <Text style={styles.userName}> {chat.chatId} </Text>

                <Image
                  style={styles.userCamera}
                  source={require("./camera.png")} // Provide the path to your user image
                />
              </TouchableOpacity>
            </View>
          );
        })}
        <Image
          style={styles.chatbottom}
          source={require("./chatscreen.png")} // Provide the path to your user image
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#FFF",
  },
  userButton: {
    height: 70,
    padding: 25,
    display: "flex",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  chatbottom: {
    height: 40,
    width: 430,
    padding: 100,
    left: 2,
    top: -2,
  },
  userIcon: {
    position: "absolute",
    left: 5,
    top: 5,
  },
  userImage: {
    width: 49,
    height: 49,
    position: "absolute",
    left: 12,
    top: 10,
    borderRadius: 40, // Make it circular
  },
  imageBackground: {
    width: 90,
    height: 70,
    position: "absolute",
    left: 13,
    top: 9,
    borderRadius: 18, // Make it circular
  },
  pin: {
    width: 30,
    height: 30,
    position: "absolute",
    left: 20,
    top: 15,
    borderRadius: 18, // Make it circular
  },
  userName: {
    position: "absolute",
    left: 68,
    top: 22,
    fontSize: 18,
    fontFamily: "Avenir Next",
    fontWeight: "500",
  },
  header: {
    position: "absolute",
    left: 60,
    top: 15,
    width: 250,
    height: 40,
  },
  userCamera: {
    position: "absolute",
    width: 27,
    height: 27,
    right: 20,
    top: 20,
    color: "grey",
  },
});
