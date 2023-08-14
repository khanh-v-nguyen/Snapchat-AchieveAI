import React from "react";
import { StyleSheet, Platform, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ConversationBottom from "../components/ConversationBottom";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Stack = createStackNavigator();

const CHATBOT_USER_OBJ = {
  _id: 2,
  name: "Achieve AI Screen",
};

export default function AchieveAIScreen({ route }) {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>You are friends with Achieve AI 🤖 📚</Text>
        <Text style={styles.subtext}>Work with Achieve AI to...</Text>
        <View>
          <Pressable
            style={styles.options}
            onPress={() => {
              navigation.navigate("AchieveAI");
            }}
          >
            <TouchableOpacity>
              <Text style={styles.optionstext}>Build a study schedule</Text>
            </TouchableOpacity>
          </Pressable>
          <Pressable style={styles.options}>
            <TouchableOpacity>
              <Text style={styles.optionstext}>Join a study pod</Text>
            </TouchableOpacity>
          </Pressable>
          <Pressable style={styles.options}>
            <TouchableOpacity>
              <Text style={styles.optionstext}>Create a pomodoro timer</Text>
            </TouchableOpacity>
          </Pressable>
        </View>
      </View>
      <ConversationBottom></ConversationBottom>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Avenir Next",
    fontWeight: "600",
    fontSize: 18,
    top: 20,
  },
  subtext: {
    fontFamily: "Avenir Next",
    fontWeight: "600",
    fontSize: 13,
    top: 30,
    color: "#999999",
  },
  optionstext: {
    fontFamily: "Avenir Next",
    fontWeight: "400",
    fontSize: 16,
    alignSelf: "center",
  },
  options: {
    borderWidth: 0.4,
    borderBottomColor: "lightgrey",
    borderTopColor: "white",
    borderLeftColor: "white",
    borderRightColor: "white",
    top: 40,
    width: 410,
    height: 71,
    paddingVertical: 20,
  },

  mainContainer: {
    backgroundColor: "#F5F5F5",
    height: "96%",
  },
  container: {
    backgroundColor: "white",
    borderWidth: 0.4,
    borderColor: "lightgrey",
    height: 300,
    marginHorizontal: 10,
    borderRadius: 10,
    top: 40,
    alignItems: "center",
  },
  topNav: {
    flex: 1,
    backgroundColor: "lightgrey",
  },
});
