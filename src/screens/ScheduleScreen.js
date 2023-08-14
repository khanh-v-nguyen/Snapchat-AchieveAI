import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Platform, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import UserChat from "../components/UserChat";
import AchieveAI2 from "../chatbots/AchieveAi2";
import AchieveAIScreen from "./AchieveAIScreen";
import ConversationHeader from "../components/ConversationHeader";
import ConversationBottom from "../components/ConversationBottom";
// prettier-ignore
export const CHATBOTS = {
  "Achieve AI2": {
    name: "Achieve AI2",
    imageUrl: "https://loremflickr.com/140/140",
    component: AchieveAI2,
  },
}

export default function ScheduleScreen({ route, navigation }) {
  const { isChatbot, chatId } = route.params;
  const insets = useSafeAreaInsets();

  const makeChatbotComponent = (chatbotName) => {
    if (CHATBOTS[chatbotName]) {
      const Chatbot = CHATBOTS[chatbotName].component;
      return <Chatbot />;
    } else {
      return <Text>No Chatbot Found with name '{chatbotName}'</Text>;
    }
  };

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: insets.bottom, paddingTop: insets.top },
      ]}
    >
      <ConversationHeader title="Achieve AI" />
      {isChatbot ? makeChatbotComponent(chatId) : <UserChat chatId={chatId} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",

    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  topNav: {
    flex: 1,
    backgroundColor: "lightgrey",
  },
});
