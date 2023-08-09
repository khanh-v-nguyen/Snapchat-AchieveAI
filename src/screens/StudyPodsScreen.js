import {Text, View, Switch, StyleSheet, Image, TextInput, Button, ScrollView} from 'react-native'
import { useState } from 'react'
import GhostModeBox from '../components/GhostModeBox';
// import Header from '../components/Header';
import Header from '../components/SettingsHeader';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import ChatBubble from "../components/ChatBubble.js"
import GPT from "../testing/TestChatBot.js"
export default function StudyPodsScreen() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);    
    const insets = useSafeAreaInsets();
    const tabBarHeight = useBottomTabBarHeight();

    const [userInput, setUserInput] = useState("huh")

    const [chatList, setChatList] = useState([
        {
            name: 'khanh',
            message: 'hi everyone'
        },
        {
            name: 'megha',
            message: 'ok guys lets study'
        }
    ])

    const handleAddChat = () => {
        const temp = {
            name: 'khanh',
            message: userInput
        }
        setChatList([...chatList, temp])
        setUserInput(null)
        console.log(chatList)
    }
    

    return (
    <View style={[{flex:1, alignItems: 'center'}, 
        {
          // Paddings to handle safe area
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          marginBottom: tabBarHeight,
        },
      ]}>
        <Header title='Study Pods'></Header>
        {/* <GhostModeBox></GhostModeBox> */}

        <View style={styles.studyModeContainer}>
            {/* <ScrollView>
                {chatList.map((elem)=> {
                    return <ChatBubble name={elem.name} message={elem.message}></ChatBubble>
                }
                )
                }
            </ScrollView> */}
            {/* <ChatBubble name="me" message='hi yall are we ready to study'></ChatBubble>
            <ChatBubble name="me" message='yes i just need to get my charger'></ChatBubble>
            <ChatBubble name="me" message='lets do this lets do this lets do this lets do this lets do this lets do this lets do this '></ChatBubble>
            <ChatBubble name="me" message='i can start the timer'></ChatBubble>
            <ChatBubble name="me" message='nobody leave so we can keep our streak😭'></ChatBubble> */}

            {/* <TextInput style={styles.input} value={userInput} onChangeText={(text)=>setUserInput(text)}></TextInput>
            <Button title=">" onPress={handleAddChat}></Button> */}

            <GPT></GPT>

            

        </View>
        
    </View>
    
    )
}

const styles=StyleSheet.create({
    header: {
        alignItems: "center",
        flexDirection: "horizontal",
        justifyContent: 'flex-end'
    },
    modeContainer: {
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "red",
        width: '80%',
        height: "300"
    },

    studyModeContainer: {
        borderRadius: 10,
        align: 'center',
        width: '90%',
        // backgroundColor: 'white',
        // shadowOpacity: 0.15,
        // shadowRadius: 7,
        // shadowOffset: {height: 1},
        // margin: 10
        
    },
    podsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        padding: 12,
        alignItems: 'center'
    },
    podsTextContainer: {
        width: 0,
        flexGrow: 1,
        flex: 1,
    },
    studyModeItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12
    },
    input: {
        borderWidth: 1,
        padding: 10,
        bordeRadius: 5
    }

})