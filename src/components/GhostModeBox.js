import {View, Image, Text, StyleSheet, Touchable, Pressable} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"
export default function GhostModeBox(){
    const navigation = useNavigation();

    return (
        <View>
            <Pressable onPress={() => {
            navigation.navigate("Settings")}}>
            <TouchableOpacity>
                <View style={styles.container}>
                    <Image
                        style={styles.image}
                        source={require("../../assets/snapchat/GhostModeMap.jpg")}
                    />
                    <View style={styles.bottomBox}>
                        <Text>Sharing Study Status</Text>
                        <Text>With Friends</Text>
                    </View>
                </View>
        </TouchableOpacity>
        </Pressable>

        </View>
        

        
    )
}

const styles = StyleSheet.create(
    {
        container: {
            borderRadius: 10,  
            height: 200,
            width: 350,
            backgroundColor: "white",
            marginBottom: 30
            // shadowColor: 'gray',
            // // shadowOffset: {width: -2, height: 4},
            // shadowOpacity: 0.4,
            // shadowRadius: 3,
            // marginTop: 30
        },
        image: {
            width: "100%",
            height: "70%",
            marginBottom: "10",
        },
        bottomBox: {
            backgroundColor: 'white',
            height: "25%",
            padding: 10
        }
    }
)