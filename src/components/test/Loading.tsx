import { THEME } from "@/constants/theme";
import React from "react";
import { View } from "react-native";
import { PacmanIndicator } from "react-native-indicators";

const Loading = () => {
  return (
    <View>
      <PacmanIndicator color={THEME.palette.pink} size={100} />
    </View>
  );
};

export default Loading;
