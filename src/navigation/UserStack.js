import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserTab from "./UserTab";
import ConversationScreen from "../screens/ConversationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import AchieveAI2 from "../chatbots/AchieveAi2";
import ScheduleScreen from "../screens/ScheduleScreen";
const Stack = createStackNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="UserTab" component={UserTab} />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Achieve AI"
          component={ConversationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AchieveAI"
          component={AchieveAI2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScheduleScreen"
          component={ScheduleScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
