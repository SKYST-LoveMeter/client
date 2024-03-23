import { THEME } from "@/constants/theme";
import React from "react";
import { PacmanIndicator } from "react-native-indicators";

const Loading = () => {
  return <PacmanIndicator color={THEME.palette.pink} />;
};

export default Loading;
