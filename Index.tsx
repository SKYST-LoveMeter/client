import { THEME } from "@/constants/theme";
import { store } from "@/store/configureStore";
import { NavigationContainer } from "@react-navigation/native";
import App from "App";
import { registerRootComponent } from "expo";
import { View } from "react-native";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components/native";

const Index = () => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={THEME}>
          <App></App>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default registerRootComponent(Index);
