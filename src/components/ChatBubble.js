import Stories from "../components/StoriesBitmoji"
import {Modal, View, Text, StyleSheet, Image, Pressable, TouchableOpacity} from "react-native";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons"; 

export default function app({name, message, color}) {
    
    const [reactions, setReactions] = useState([])
    const [isLimitReached, setLimitReached] = useState(false)
    const [podsModalVisible, setPodsModalVisible] = useState(false)


    const reactionImg = 
        [require("../../assets/reactions/thumbsup.png"),
        require("../../assets/reactions/star.png"),
        require("../../assets/reactions/huh.png"),
        require("../../assets/reactions/bookbuddy.png"),
        require("../../assets/reactions/gloomy.png"),
    ]

    function addReaction() {
        reactions.length == 3 ? setLimitReached(true) : null
        reactions.length == 1 ? setLimitReached(false): null
        isLimitReached == true ? setReactions(reactions.slice(0, -1)) : null
        isLimitReached == false ? setReactions(reactions => [...reactions, <Image style={styles.reaction} source={getRandomReaction()}/>]) : null
    }

    function getRandomReaction() {
        let randnum = Math.floor(Math.random() * 5)
        return reactionImg[randnum]
    }

    function messageOrInvite() {
        if(name=="invite") {
            return (
                <View>
                    <TouchableOpacity onPress={()=>setPodsModalVisible(true)} style={styles.inviteContainer}>
                        <View style={styles.inviteBox}>
                            <Image style={styles.inviteImage} source={require("../../assets/snapchat/adampfp.png")}></Image>
                            <Text>Adam is requesting to join</Text>
                        </View>
                        <Ionicons name='ios-arrow-forward'></Ionicons>
                    </TouchableOpacity>

                    <Modal
                        animationType = "slide"
                        visible={podsModalVisible}
                        transparent={true}
                        presentationStyle={"overFullScreen"}
                        onRequestClose={()=> {setPodsModalVisible(!podsModalVisible)}}
                        >

                            <View style={styles.centeredView}>
                            <View style={styles.modalView}>

                                <Text style={[styles.modalText, {fontSize: 18}]}>Adam wants to join your Pod</Text>
                                <Text style={styles.modalText}>__________________________</Text>
                                
                                <View style={styles.iconShadow}>
                                <Image source={require('../../assets/snapchat/adampfp.png')} style={[styles.bottomSheetImageContainer, styles.iconShadow]}></Image>
                                </View>

                                <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setPodsModalVisible(!podsModalVisible)}>
                                <Text style={styles.textStyle}>Accept</Text>
                                </Pressable>

                                <Pressable
                                onPress={() => setPodsModalVisible(!podsModalVisible)}>
                                <Text style={styles.modalText}>Ignore</Text>
                                </Pressable>
                            </View>
                            </View>
                        </Modal>
                </View>
                
            )
        }
        else
        {
            return (
                <Text style={styles.message}>{message}</Text>
            )
        }
    }
    
    return ( 
        <TouchableOpacity onPress={addReaction}>
            <View>
            <Text style={[styles.name, {color: color}]}>{name}</Text>
            <View style={styles.container}>
                <View style={[styles.bar, {backgroundColor: color}]}></View>
                {messageOrInvite()}
            </View>
            
            <View style={{flexDirection:'row'}}>
            {reactions.map((elem, key={index}) => {
                return (
                    elem
                )
            })}
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
        borderRadius: 5
        
    },
    bar: {
        height: "100%",
        width: 4,
        marginRight: 10,
        borderRadius: 10
    },
    name: {
        flex: 0,
        fontWeight: 'bold',
        fontFamily: "Avenir Next",
        fontSize: 12
    },
    message: {
        flex: 0,
        includeFontPadding: false,
        fontFamily: "Avenir Next",
        fontSize: 15
    },
    seperator: {
        width: "100%",
        fontWeight: "thin",
        color: "gray",
        paddingTop: 0,
        marginTop: 0
    },
    reactionBar: {
        backgroundColor: 'gray',
        width: '100%',
        height: 50,
        borderRadius: 50
    },
    reaction: {
        height: 40,
        width: 40,
    },
    inviteContainer: {
        flexDirection: 'row',
        borderWidth: 0.2,
        borderRadius: 12,
        padding: 3,
        width: '88%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: "#535456"
    },
    inviteBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    inviteImage: {
        borderWidth: 0.2,
        borderRadius: 50,
        height: 60,
        width: 60,
        margin: 5,
        borderColor: "#535456"
    },





    modalView: {
        marginTop: 250,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        alignSelf: 'center',
        justifyContent: 'center'
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonClose: {
        backgroundColor: 'orange',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        margin: 10,
        textAlign: 'center',
        color: "black",
        textAlign: "center",
        fontFamily: "Avenir Next"
      },
      iconShadow: {
        shadowColor:"black",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 0}, 
      },
      avenir: {
        color: "black",
        textAlign: "center",
        fontFamily: "Avenir Next"
      },
      bottomSheetImageContainer: {
        borderRadius: 50,
        width: 70,
        height: 70,
        backgroundColor: 'white',
        margin: 5,
        
    
      },
})