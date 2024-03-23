import { THEME } from "@/constants/theme";
import App from "App";
import { registerRootComponent } from "expo";
import { View } from "react-native";
import { ThemeProvider } from "styled-components/native";

const Index = () => {
  return (
    <>
      <App></App>
    </>
  );
};

export default registerRootComponent(Index);
