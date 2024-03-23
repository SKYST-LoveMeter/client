import HomeScreen from "@/screens/main/HomeScreen";
import SubScreen from "@/screens/main/SubScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const RootStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Sub" component={SubScreen} />
    </Stack.Navigator>
  );
};
