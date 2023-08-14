import {ImageBackground, Text, View, Switch, StyleSheet, Image, TextInput, Button, ScrollView, TouchableOpacity} from 'react-native'
import { useState, useRef } from 'react'
import GhostModeBox from '../components/GhostModeBox';
// import Header from '../components/Header';
import Header from '../components/SettingsHeader';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import ChatBubble from "../components/ChatBubble.js"
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
 
import GPT from "../testing/TestChatBot.js"
import { Circle } from 'react-native-svg';

export default function CircleButton(props) {
    return (
        <View style={styles.circleButtonContainer}>
            <Image style={styles.circleButton} source={props.img}></Image>
            <Text style={styles.avenir}>{props.name}</Text>
            <Text style={styles.avenirLight}>{props.username}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    
    circleButtonContainer: {
    marginTop: 5,
    alignItems: 'center',
},
circleButton: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 3,
    margin: 5,
    borderColor: 'orange',
},
avenir: {
    flex: 0,
    fontWeight: 'bold',
    fontFamily: "Avenir Next",
    fontSize: 12
},
avenirLight: {
    flex: 0,
    fontFamily: "Avenir Next",
    fontSize: 12
}

})