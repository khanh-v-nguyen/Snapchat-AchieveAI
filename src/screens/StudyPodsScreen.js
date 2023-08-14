import {
  Text,
  View,
  Switch,
  StyleSheet,
  Image,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState, useRef } from "react";
import GhostModeBox from "../components/GhostModeBox";
// import Header from '../components/Header';
import Header from "../components/SettingsHeader";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import ChatBubble from "../components/ChatBubble.js";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import CircleButton from "../components/CircleButtons";

import { Circle } from "react-native-svg";
export default function StudyPodsScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();
  const bottomSheetModalRef = useRef(null);

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
  }

  return (
    <View
      style={[
        { flex: 1, alignItems: "center" },
        {
          // Paddings to handle safe area
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          marginBottom: tabBarHeight,
        },
      ]}
    >
      <Header onTap={handlePresentModal} title="Study Pods (4)"></Header>

      <View style={styles.studyModeContainer}>
        <ScrollView vertical={true} style={{ height: "70%" }}>
          <ChatBubble
            name="Sammy"
            color="red"
            message="i'm freaking out, we need to complete the assignments for final showcase"
          />
          <ChatBubble name="Joshua" color="purple" message="ok its pods time" />
          <ChatBubble
            name="Sammy"
            color="red"
            message="have you guys finished your deliverables?"
          />
          <ChatBubble
            name="invite"
            color="green"
            message="omg i love pods 😭"
          />
          <ChatBubble
            name="Megha"
            color="purple"
            message="no let's do it over call"
          />
          <ChatBubble
            name="Megha"
            color="purple"
            message="remember we need to keep our study streak"
          />
          <ChatBubble
            name="David"
            color="red"
            message="I'll set a timer for us!"
          />
        </ScrollView>

        <View>
          {/* <Image style={styles.keyboard} source={require("../../assets/screenshots/presencebar.png")}/> */}
          {/* <Header></Header> */}
        </View>
      </View>

      <BottomSheetModalProvider>
        <BottomSheetModal
          snapPoints={["40%"]}
          ref={bottomSheetModalRef}
          index={0}
          backgroundStyle={{ backgroundColor: "#F7F8FA" }}
        >
          <ScrollView vertical={true}>
            <View style={styles.sheetContainer}>
              <TouchableOpacity style={{ alignSelf: "center" }}>
                <Image
                  style={styles.sheetButton}
                  source={require("../../assets/screenshots/Cell.png")}
                />
              </TouchableOpacity>

              <View>
                <Text style={{ fontWeight: "bold", marginTop: 20 }}>
                  In this Pod
                </Text>
                <ScrollView horizontal={true}>
                  <CircleButton
                    name="Joshua"
                    username="imjoshua"
                    img={require("../../assets/pfps/Rectangle-5.png")}
                  />
                  <CircleButton
                    name="Will"
                    username="imwill"
                    img={require("../../assets/pfps/Rectangle.png")}
                  />
                  <CircleButton
                    name="Sammy"
                    username="imsammy"
                    img={require("../../assets/pfps/Rectangle-1.png")}
                  />
                  <CircleButton
                    name="Anna"
                    username="imanna"
                    img={require("../../assets/pfps/Rectangle-3.png")}
                  />
                  <CircleButton
                    name="David"
                    username="imdavid"
                    img={require("../../assets/pfps/Rectangle-4.png")}
                  />
                  <CircleButton
                    name="Megha"
                    username="immegha"
                    img={require("../../assets/pfps/Rectangle-2.png")}
                  />
                  <CircleButton
                    name="Khanh"
                    username="imkhanh"
                    img={require("../../assets/pfps/Rectangle-6.png")}
                  />
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  studyModeContainer: {
    borderRadius: 10,
    align: "center",
    width: "90%",
  },
  circleButtonContainer: {
    marginTop: 5,
    alignItems: "center",
  },
  circleButton: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 3,
    margin: 5,
    borderColor: "orange",
  },
  avenir: {
    flex: 0,
    fontWeight: "bold",
    fontFamily: "Avenir Next",
    fontSize: 12,
  },
  sheetContainer: {
    margin: 20,
  },
  sheetButton: {
    backgroundColor: "white",
    borderRadius: 20,
    width: 350,
    height: 70,
  },
  keyboard: {
    height: 80,
    width: "110%",
  },
});
