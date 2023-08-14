import { colors } from "../../assets/themes/colors";
import { fontHeader } from "../../assets/themes/font";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Pressable,
  SafeAreaView,
  Platform,
  Button,
  Image,
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";
import { getChat } from "../utils/hooks/getChatGPT.js";
import ChatBubble from "../components/ChatBubble.js";
import { useEffect, useState } from "react";
const Stack = createStackNavigator();

const prompt = [
  {
    role: "system",
    content:
      "You are an accountablility coach. You will ask the user for their name and their educational goal, aka north star. if they would like to set a study timer. If they say yes, you will wish them good luck.",
  },
];

export default function ConversationBottom({ title }) {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const [messagesGPT, setMessagesGPT] = useState(prompt);
  const [snapMessages, setSnapMessages] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  async function fetchInitialMessage() {
    const response = await getChat(prompt);
    const message = response.choices[0].message;
    const content = response.choices[0].message.content;
    setMessagesGPT(messagesGPT.concat(message));
    setSnapMessages(content);
  }

  useEffect(() => {
    fetchInitialMessage();
  }, []);

  const addNewMessage = (newMessages) => {
    console.log(messages);
    setMessages((previousMessages) => {
      // console.log("PREVIOUS MESSAGES:", previousMessages);
      // console.log("NEW MESSAGE:", newMessages);
      return GiftedChat.append(previousMessages, newMessages);
    });
  };

  function respondToUserFirst() {
    setAllMessages([...allMessages, userInput]);
    respondToUser();
  }
  async function respondToUser(userMessages) {
    setAllMessages([...allMessages, userInput]);

    // const userMessageText = userMessages[0].text;
    const messageObj = {
      role: "user",
      content: userInput,
    };
    const messageHistory = messagesGPT.concat(messageObj);
    console.log(messageHistory);
    let response = await getChat(messageHistory);
    const messageResponse = response.choices[0].message;
    const content = messageResponse.content;

    setMessagesGPT(messageHistory.concat(messageResponse));
    setAllMessages((allMessages) => [...allMessages, content]);

    // if(content.includes('start timer') || content.includes('Start timer') ){
    //     console.log('end reached')
    //     timer.push({'time': 20, 'type': 'seconds'})
    //     displays.push(<MyTimer></MyTimer>)
    //     console.log(timer)
    // }

    console.log(allMessages);
    // addBotMessage(content);
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        <Pressable
          style={styles.buttons}
          onPress={() => {
            navigation.navigate("Camera");
          }}
        >
          <Image
            style={styles.cameraButton}
            source={require("../../assets/camera.png")}
          />
        </Pressable>

        <View style={styles.messageBox}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setUserInput(text)}
          ></TextInput>

          <Image
            style={styles.microphone}
            source={require("../../assets/microphone.png")}
          />
        </View>

        <View style={styles.headerRight}>
          <Pressable>
            <Image
              style={styles.buttons}
              source={require("../../assets/smiley.png")}
            />
          </Pressable>
          <Pressable>
            <Image
              style={styles.buttons}
              source={require("../../assets/imagesicon.png")}
            />
          </Pressable>
          <Pressable>
            <Image
              style={styles.plusButton}
              source={require("../../assets/plus.png")}
            />
          </Pressable>
        </View>
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    backgroundColor: "white",
    position: "absolute", //Here is the trick
    bottom: 0, //Here is the trick
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 0.2,
    borderTopColor: "lightgrey",
    justifyContent: "center",
  },
  messageBox: {
    width: 200,
    height: 45,
    left: 50,
    backgroundColor: "#ECECEC",
    borderRadius: 30,
    position: "absolute",
  },
  input: {
    height: 45,
    left: 20,
    width: 50,
  },

  title: {
    textAlign: "right",
    left: 80,
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
    left: 200,
  },

  cameraButton: {
    height: 30,
    width: 30,
    justifyContent: "center",
  },
  plusButton: {
    top: 8,
    height: 30,
    width: 30,
    justifyContent: "center",
  },
  microphone: {
    height: 25,
    width: 25,
    left: 160,
    top: 10,
    position: "absolute",
  },
  buttons: {
    height: 45,
    width: 45,
    justifyContent: "center",
  },
  buttonsBackground: {
    position: "absolute",
    borderRadius: 40,
  },
  studyModeContainer: {
    borderRadius: 10,
    alignItems: "end",
    width: "90%",
  },
});
