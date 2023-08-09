import Stories from "../components/StoriesBitmoji"
// import ChatIcon from "../components/ChatIcon.js"

import {View, Text, StyleSheet, Image, Pressable, TouchableOpacity} from "react-native";
export default function app() {
    return ( 
        <TouchableOpacity onPress={()=>console.log("chatted!")}>
            <View>
            <View style={styles.container}>
                {/* <ChatIcon></ChatIcon> */}
                <View style={styles.name}>
                    <Text style={styles.name}>MyCoach</Text>
                    <Text style={styles.received}>Received • 2h</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
       
    )
}

// bitmoji icon
// tabs icons
// 

const styles = StyleSheet.create({
    container: 
    {
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: "center",
        marginBottom: 0,
        borderBottomColor: "black",
        borderBottomWidth: 0.2,
        borderRadius: 5
    },
    name: {
        flex: 0,
        fontWeight: "bold"
    },
    received: {
        flex: 0,
        includeFontPadding: false
    },
    seperator: {
        width: "100%",
        fontWeight: "thin",
        color: "gray",
        paddingTop: 0,
        marginTop: 0
    }
})