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
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { RootStackNav } from "@/navigators/RootStackNav";
import { getData } from "@/utils/storage";
import { useEffect } from "react";
import { addToken } from "@/store/modules/auth";
import { useAppDispatch } from "@/store/configureStore.hooks";

const Test = styled.View`
  background-color: ${({ theme }) => theme.palette.pink};
  width: 100px;
  height: 100px;
`;

export default function App() {
  const dispatch = useAppDispatch();

  const checkIsLoggedIn = async () => {
    const token = await getData("token");

    if (token) {
      dispatch(addToken(token));
    }
  };

  useEffect(() => {
    checkIsLoggedIn();
  }, []);

  const [fontsLoaded] = Fonts.useFonts(customFontsToLoad);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <RootStackNav />
    </NavigationContainer>
  );
}
