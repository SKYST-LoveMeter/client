import { useAppSelect } from "@/store/configureStore.hooks";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStack } from "./AuthStack";
import { MainStack } from "./MainStack";

const Stack = createNativeStackNavigator();

export const RootStackNav = () => {
  const token = useAppSelect((state) => state.auth.token);

  const initialRouteName = token ? "MainStack" : "AuthStack";

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={initialRouteName as "AuthStack" | "MainStack"}
    >
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="MainStack" component={MainStack} />
    </Stack.Navigator>
  );
};
