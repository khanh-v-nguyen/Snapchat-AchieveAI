import { Pressable, Text } from "react-native";

export default function Pins(props) {
    const myColor = props.color
    return (
        <Pressable style={{shadowOpacity: 0.3, shadowOffset: {height: 1},padding: 10, backgroundColor: myColor, borderRadius: '50%', paddingHorizontal: 25}}>
                  <Text style={{fontWeight: 'bold'}}>{props.title}</Text>
                </Pressable>
    );
}