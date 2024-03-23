import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Fonts from "expo-font";
import { customFontsToLoad } from "@/config/fonts";
import Typography from "@/components/@common/Typography";
import Divider from "@/components/@common/Divider";
import FlexBox from "@/components/@common/FlexBox";
import Icons from "@/components/@common/Icons";
import Margin from "@/components/@common/Margin";
import styled, { ThemeProvider } from "styled-components/native";
import { THEME } from "@/constants/theme";

const Test = styled.View`
  background-color: ${({ theme }) => theme.palette.pink};
  width: 100px;
  height: 100px;
`;

export default function App() {
  const [fontsLoaded] = Fonts.useFonts(customFontsToLoad);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={THEME}>
      <View style={styles.container}>
        <Typography size="lg">Hello World</Typography>
        <Typography size="lg">Hello World</Typography>
        <Test></Test>
        <Typography size="lg">Hello World</Typography>
        <Typography size="lg">Hello World</Typography>
      </View>
    </ThemeProvider>
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
