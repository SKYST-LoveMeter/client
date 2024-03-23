import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelect } from "@/store/configureStore.hooks";
import { login } from "@/store/modules/auth";

export default function HomeScreen() {
  const auth = useAppSelect((state) => state.auth);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}
