import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { fontHeader } from "../../assets/themes/font";
import { colors } from "../../assets/themes/colors";
import StoriesBitmoji from "../components/StoriesBitmoji";
import DiscoverFeed from "../components/DiscoverFeed";
import CircleButton from "../components/CircleButtons.js";


import Header from "../components/Header";

/* Discover FlatList will render a component in the list
 * for each object in the array DATA. This is just an example I took
 * from the FlatList documentation, so feel free to change the contents.
 */
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Third Item",
  },
];

export default function StoriesScreen({ route, navigation }) {
  const tabBarHeight = useBottomTabBarHeight();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
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
      <Header title="Stories" />
      <View style={styles.contentContainer}>
        <View style={styles.storyBar}>
          <Text style={styles.sectionHeader}>Friends</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            // contentContainerStyle={styles.stories}
          >
            <CircleButton name="Joshua" username="imjoshua" img={require('../../assets/pfps/Rectangle-5.png')}/>
            <CircleButton name="Will" username="imwill" img={require('../../assets/pfps/Rectangle.png')}/>
            <CircleButton name="Sammy" username="imsammy" img={require('../../assets/pfps/Rectangle-1.png')}/>
            <CircleButton name="Anna" username="imanna" img={require('../../assets/pfps/Rectangle-3.png')}/>
            <CircleButton name="David" username="imdavid"img={require('../../assets/pfps/Rectangle-4.png')}/>
            <CircleButton name="Megha" username="immegha" img={require('../../assets/pfps/Rectangle-2.png')}/>
            <CircleButton name="Khanh" username="imkhanh" img={require('../../assets/pfps/Rectangle-6.png')}/>
</ScrollView>
        </View>
        <View style={styles.discoverContent}>
          <Text style={styles.sectionHeader}>Discover</Text>
          <FlatList
            data={DATA}
            horizontal={false}
            numColumns={2}
            ItemSeparatorComponent={() => <View style={{ height: "1%" }} />}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            renderItem={({ item }) => <DiscoverFeed title={item.title} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 12,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  storyBar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 4,
  },
  discoverContent: {
    display: "flex",
    flexDirection: "column",
  },
  stories: {
    display: "flex",
    // gap: 12,
    width: "100%",
  },
  DiscoveryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  sectionHeader: {
    textAlign: "left",
    paddingVertical: 4,
    color: colors.primary,
    fontSize: fontHeader.fontSize,
    fontFamily: fontHeader.fontFamily,
    fontWeight: fontHeader.fontWeight,
  },
});
