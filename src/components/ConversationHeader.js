import { Text, View, StyleSheet, Button, Image } from "react-native";
import { colors } from "../../assets/themes/colors";
import { fontHeader } from "../../assets/themes/font";
import { createStackNavigator } from "@react-navigation/stack";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();

export default function ConversationHeader({ title }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        <Pressable
          style={styles.buttons}
          onPress={() => {
            navigation.navigate("Chat");
          }}
        >
          <Image
            style={styles.buttons}
            source={require("../../assets/chevron.png")}
          />
        </Pressable>
      </View>
      <Ionicons
        style={styles.userBackground}
        name="ellipse"
        size={55}
        color="#ECECEC"
      />
      <Image
        style={styles.userImage}
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/aecc/8212/752d3203f6531d458529dc58970f2b39?Expires=1692576000&Signature=UNJH0QsYBuGlqsGpHOMUAkdrUvStoa2w940lhKWh9xhF1yZhGUidPM6UZq3gqkAQNnQFS0AQ4rtK~ECBElXDI~36jbJWD56rpfnYq0Xdya6mK2EHmFZavYIEqBxEUJlIM773EEnoABxP99Iy7XuC78q4MWGscGOUJs23t9dcd83wN3hmslmy8b5bA0jqRhqtBD6ATjA0DXCH6R7vur~jfkE1p1X9-JCwl1hW8kZUz4ghCrfhtezwBtuLTfuKRTAtUoP-ZiNZ2KVC09s8fKbn1xsMNWPoKDcHsvQsK2lzqNe3N2MGWB2chazMJgk5i2qRnjZmD487u-9ENK0d9EkQUA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        }}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 18,
    alignItems: "center",
    borderWidth: 0.2,
    borderTopColor: "white",
    borderColor: "lightgrey",
  },
  userImage: {
    width: 48,
    height: 48,
    position: "absolute",
    left: 65,
    borderRadius: 40, // Make it circular
  },
  userBackground: {
    position: "absolute",
    left: 63,

    borderRadius: 40, // Make it circular
  },
  title: {
    textAlign: "right",
    left: 80,
    color: colors.primary,
    fontSize: fontHeader.fontSize,
    fontFamily: fontHeader.fontFamily,
    fontWeight: fontHeader.fontWeight,
  },
  headerLeft: {
    flexDirection: "row",
    gap: 8,
  },
  headerRight: {
    flexDirection: "row",
    gap: 8,
  },
  buttons: {
    borderRadius: 100,
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
