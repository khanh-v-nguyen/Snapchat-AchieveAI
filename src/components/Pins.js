import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Pins(props) {
    const myColor = props.color
    const iconType = props.icon
    const iColor = props.iconColor

    return (
        <TouchableOpacity onPress={props.onTap} style={{shadowOpacity: 0.3, shadowOffset: {height: 1},padding: 10, backgroundColor: myColor, borderRadius: '50%', paddingHorizontal: 25, flexDirection:'row', alignItems:'center'}}>
            <Ionicons name={iconType} size={18} color={iColor} style={{margin: 2}}/>
            <Text style={[{fontWeight: 'bold'}, {color: iColor}]}>{props.title}</Text>
        </TouchableOpacity>
    );
}