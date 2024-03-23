import CalendarMainScreen from "@/screens/main/CalendarMainScreen";
import HomeScreen from "@/screens/main/HomeScreen";
import SettingsMainScreen from "@/screens/main/SettingsMainScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CalendarMain" component={CalendarMainScreen} />
      <Stack.Screen name="SettingsMain" component={SettingsMainScreen} />
    </Stack.Navigator>
  );
};
