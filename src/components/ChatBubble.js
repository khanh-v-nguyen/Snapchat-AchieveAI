import Stories from "../components/StoriesBitmoji"
import {View, Text, StyleSheet, Image, Pressable, TouchableOpacity} from "react-native";

export default function app({name, message}) {
    return ( 
        <TouchableOpacity onPress={()=>console.log("chatted!")}>
            <View>
            <View style={styles.container}>
                <View style={styles.bar}></View>
                <View style={styles.name}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.message}>{message}</Text>
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
        margin: 5,
        marginLeft: 0,
        padding: 5,
        borderRadius: 5
        
    },
    bar: {
        backgroundColor: "red",
        height: "100%",
        width: 2
    },
    name: {
        flex: 0,
        fontWeight: "bold"
    },
    message: {
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