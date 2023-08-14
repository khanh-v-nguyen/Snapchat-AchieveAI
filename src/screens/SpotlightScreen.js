import React from "react";
import { ImageBackground, Button, View, Text, Image} from "react-native";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useRef } from "react";

import { colors } from "../../assets/themes/colors.js";
import { fontHeader } from "../../assets/themes/font";

import Profile from "../components/StoriesBitmoji.js"
import { ScrollView, StyleSheet} from 'react-native'
import StoriesBitmoji from "../components/StoriesBitmoji.js";
import StudyingStoriesBitmoji from "../components/StudyingStoriesBitmoji.js";
import ChatBubble from "../components/ChatBubble.js"
import StudyPodsScreen from "../screens/StudyPodsScreen.js"

export default function SpotlightScreen() {

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <StudyPodsScreen/>
    </View>
  );
}
