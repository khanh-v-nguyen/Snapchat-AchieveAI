import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase";
import { fontHeader } from "../../assets/themes/font";

import Header from "../components/Header";
import { CHATBOTS } from "../screens/ConversationScreen";
export default function ChatScreen({ navigation }) {
  const [chats, setChats] = useState([]);
  const insets = useSafeAreaInsets();

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

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#FFF",
  },
});
