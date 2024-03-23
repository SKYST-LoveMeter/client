import { THEME } from "@/constants/theme";
import { NavigationContainer } from "@react-navigation/native";
import App from "App";
import { registerRootComponent } from "expo";
import { View } from "react-native";
import { ThemeProvider } from "styled-components/native";

const Index = () => {
  return (
    <>
      <ThemeProvider theme={THEME}>
        <App></App>
      </ThemeProvider>
    </>
  );
};

export default registerRootComponent(Index);
