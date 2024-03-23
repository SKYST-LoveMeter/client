import CalendarMainScreen from "@/screens/main/CalendarMainScreen";
import HomeScreen from "@/screens/main/HomeScreen";
import ResultScreen from "@/screens/main/ResultScreen";
import SettingsMainScreen from "@/screens/main/SettingsMainScreen";
import TestFirstScreen from "@/screens/test/TestFirstScreen";
import TestSecondScreen from "@/screens/test/TestSecondScreen";
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
      <Stack.Screen name="TestFirst" component={TestFirstScreen} />
      <Stack.Screen name="TestSecond" component={TestSecondScreen} />
      <Stack.Screen name="Result" component={ResultScreen} />
    </Stack.Navigator>
  );
};
