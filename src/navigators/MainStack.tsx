import CalendarMainScreen from "@/screens/main/CalendarMainScreen";
import HomeScreen from "@/screens/main/HomeScreen";
import SettingsMainScreen from "@/screens/main/SettingsMainScreen";
import TestFirstScreen from "@/screens/test/TestFirstScreen";
import TestFourthScreen from "@/screens/test/TestFourthScreen";
import TestSecondScreen from "@/screens/test/TestSecondScreen";
import TestThirdScreen from "@/screens/test/TestThirdScreen";
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
      <Stack.Screen name="TestThird" component={TestThirdScreen} />
      <Stack.Screen name="TestFourth" component={TestFourthScreen} />
    </Stack.Navigator>
  );
};
