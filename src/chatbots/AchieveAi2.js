import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { getChat } from "../utils/hooks/getChatGPT";
import { Bubble, Time, Day } from "react-native-gifted-chat";

const CHATBOT_USER_OBJ = {
  _id: 2,
  name: "Achieve AI",
};

const prompt = [
  {
    role: "system",
    content:
      "You are Achieve AI, an accountability assitant to the user. Your responsibility is to ask the user three questions and get the user response to each question. At the start of the conversation, you will ask the first question: ask the user what their study goal is. After they respond, ask the second question: ask if they want to get notifed daily or weekly. After you get their response, ask the third question, which will be about how long they want to keep their study habit going.",
  },
];
export default function AchieveAI2() {
  const [messages, setMessages] = useState([]);
  const [messagesGPT, setMessagesGPT] = useState(prompt);

  async function fetchinitialMessage() {
    const response = await getChat(prompt);
    const message = response.choices[0].message;
    const content = response.choices[0].message.content;
    setMessagesGPT(messagesGPT.concat(message));
    setMessages([
      {
        id: 1,
        text: content,
        createdAt: new Date(),
        user: CHATBOT_USER_OBJ,
      },
    ]);
  }

  useEffect(() => {
    fetchinitialMessage();

    // setMessages([
    //   {
    //     _id: 1,
    //     text: "Hello, welcome to simple trivia! Say 'Yes' when you're ready to play!",
    //     createdAt: new Date(),
    //     user: CHATBOT_USER_OBJ,
    //   },
    // ]);
  }, []);

  const addNewMessage = (newMessages) => {
    setMessages((previousMessages) => {
      // console.log("PREVIOUS MESSAGES:", previousMessages);
      // console.log("NEW MESSAGE:", newMessages);
      return GiftedChat.append(previousMessages, newMessages);
    });
  };

  const addBotMessage = (text) => {
    addNewMessage([
      {
        _id: Math.round(Math.random() * 1000000),
        text: text,
        createdAt: new Date(),
        user: CHATBOT_USER_OBJ,
      },
    ]);
  };

  const respondToUser = async (userMessages) => {
    console.log("User message text:", userMessages[0].text);
    const userMessageText = userMessages[0].text;
    const messagesObj = {
      role: "user",
      content: userMessageText,
    };
    const messageHistory = messagesGPT.concat(messagesObj);
    let response = await getChat(messageHistory);
    const messageResponse = response.choices[0].message;
    const content = messageResponse.content;
    setMessagesGPT(messageHistory.concat(messageResponse));

    addBotMessage(content); //addBotMessage("I am da response!");
  };

  const addNewGPTMessage = (message) => {
    setMessagesGPT(messagesGPT.concat(message));
  };

  const onSend = useCallback((messages = []) => {
    addNewMessage(messages);
  }, []);

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        textStyle={{
          right: {
            color: "black",
            fontFamily: "Avenir Next",
            fontWeight: "400",
          },
          left: {
            color: "black",
            fontFamily: "Avenir Next",
            fontWeight: "400",
          },
        }}
        wrapperStyle={{
          right: {
            borderRadius: 0,
          },
          left: { borderRadius: 0 },
          left: {
            backgroundColor: "white",
          },
          right: {
            backgroundColor: "white",
          },
        }}
      />
    );
  };
  const renderDay = (props) => {
    return <Day {...props} textStyle={{ color: "red" }} />;
  };
  const renderTime = () => null;

  return (
    <GiftedChat
      listViewProps={{
        style: {
          backgroundColor: "#F5F5F5",
        },
      }}
      renderAvatar={null}
      renderBubble={renderBubble}
      renderTime={renderTime}
      messages={messages}
      renderDay={renderDay}
      onSend={(messages) => {
        onSend(messages);
        setTimeout(() => respondToUser(messages), 1000);
      }}
      user={{
        _id: 1,
        name: "Megha",
      }}
      renderUsernameOnMessage={false}
    />
  );
}
