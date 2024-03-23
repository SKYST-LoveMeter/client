import LoginScreen from "@/screens/auth/LoginScreen";
import NicknameScreen from "@/screens/auth/NicknameScreen";
import SignUpScreen from "@/screens/auth/SignUpScreen";
import HomeScreen from "@/screens/main/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Nickname: undefined;
};

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Nickname" component={NicknameScreen} />
    </Stack.Navigator>
  );
};
