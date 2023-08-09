
import {Text, View, Switch, StyleSheet, Image} from 'react-native'
import { useState } from 'react'
import GhostModeBox from '../components/GhostModeBox';
import Header from '../components/Header';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

export default function() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);    
    const insets = useSafeAreaInsets();
    const tabBarHeight = useBottomTabBarHeight();


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
        <Header title='Settings'></Header>
        <GhostModeBox></GhostModeBox>

        <View style={styles.studyModeContainer}>
            <View style={styles.podsContainer}>
                <Image style={{width: 50, height:50}} source={require("../../assets/snapchat/defaultprofile.png")}/>
                <View style={styles.podsTextContainer}>
                    <Text style={{fontWeight:'bold'}}>Available for Pods</Text>
                    <Text>When enabled, other Snapchatters in Study Mode can add you to a pod for group studying</Text>
                </View>
                <Switch></Switch>
            </View>

            <View style={[styles.studyModeItem, {borderBottomWidth: 1, borderBottomColor: 'gray'}]}>
                <View>
                    <Text style={{fontWeight:'bold'}}>Primary Label</Text>
                    <Text>Primary Label</Text>
                </View>

                <Switch trackColor={{false: 'white', true: 'blue'}}
                onValueChange={toggleSwitch}
                value={isEnabled}></Switch>
            </View>

            <View style={styles.studyModeItem}>
                <View>
                    <Text style={{fontWeight:'bold'}}>Primary Label</Text>
                    <Text>Primary Label</Text>
                </View>

                <Switch trackColor={{false: 'white', true: 'blue'}}
                onValueChange={toggleSwitch}
                value={isEnabled}></Switch>
            </View>
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
        backgroundColor: 'white',
        shadowOpacity: 0.15,
        shadowRadius: 7,
        shadowOffset: {height: 1}
        
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
    }

})