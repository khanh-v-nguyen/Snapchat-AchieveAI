

import React from "react";
import { View, Text } from "react-native";
import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";

export default function DiscoverFeed() {
    return (
        
        <View style={styles.container}>
            <ImageBackground style={styles.feedImage}
                // style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 12}}
                source={{ uri: "https://i.pinimg.com/736x/b0/83/e3/b083e3ae17ed17d52e41a2940b104e1c.jpg" }}>
            
                <View style={styles.textDiv}>
                    <Text style = {styles.dText}>New Study Features!</Text>
                    <Text style = {styles.sponsoredText}>Sponsored</Text>
                </View>
            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingBottom: 10,
      marginRight: 5,
      marginLeft: 5,
      marginTop: 10,
      shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 15,
        shadowOffset: {
            width: 0,
            height: 5,
        },
    },
    square: {
        flexDirection: "row"
    },
    feedImage : {
        width: 175, 
        height: 300,
        shadowColor: "grey",
        padding: 10,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: 'black',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
    dText: {
        color: "white",
        fontWeight: "bold",
    },
    sponsoredText: {
        color: "white",
    },
    textDiv: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end", 
    }
  });
