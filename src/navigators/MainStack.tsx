import CalendarMainScreen from "@/screens/main/CalendarMainScreen";
import HomeScreen from "@/screens/main/HomeScreen";
import ResultScreen from "@/screens/main/ResultScreen";
import SettingsMainScreen from "@/screens/main/SettingsMainScreen";
import TestAnalyzedScreen from "@/screens/test/TestAnalyzedScreen";
import TestFirstScreen from "@/screens/test/TestFirstScreen";
import TestFourthScreen from "@/screens/test/TestFourthScreen";
import TestResultScreen from "@/screens/test/TestResultScreen";
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
      <Stack.Screen name="TestResult" component={TestResultScreen} />
      <Stack.Screen name="TestAnalyzed" component={TestAnalyzedScreen} />
    </Stack.Navigator>
  );
};
