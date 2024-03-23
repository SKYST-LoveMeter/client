import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Fonts from "expo-font";
import { customFontsToLoad } from "@/config/fonts";
import Typography from "@/components/@common/Typography";
import Divider from "@/components/@common/Divider";
import FlexBox from "@/components/@common/FlexBox";
import Icons from "@/components/@common/Icons";
import Margin from "@/components/@common/Margin";

export default function App() {
  const [fontsLoaded] = Fonts.useFonts(customFontsToLoad);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Typography size="md" weight="regular" color="black">
        Hello World
      </Typography>
      <Divider></Divider>
      <Typography size="md" weight="regular" color="black">
        Hello World
      </Typography>
      <Icons type="material" name="home" size={20} color="black"></Icons>
      <Divider></Divider>
      <Margin margin={100}></Margin>
      <FlexBox direction="row" justifyContent="center" alignItems="center">
        <Typography size="md" weight="regular" color="black">
          Hello World
        </Typography>
        <Typography size="md" weight="regular" color="black">
          Hello World
        </Typography>
      </FlexBox>
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
