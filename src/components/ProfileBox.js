import {View, Box, Text, StyleSheet, Image} from 'react-native'
import { useState } from 'react'
export default function ProfileBox(props) {
    const [str, setString] = useState("")
    return (
        <View style={styles.container}>
            <View>
                <Text> Hi</Text>
                <Text >{props.header}</Text>
                <Text > {props.string}</Text>
            </View>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        flex: 1,
        alignItems: "center",
        borderRadius: "5",
        flexDirection: "row",
        padding: 20
    },
})