import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Fonts from "expo-font";
import { customFontsToLoad } from "@/config/fonts";

export default function App() {
  const [fontsLoaded] = Fonts.useFonts(customFontsToLoad);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
