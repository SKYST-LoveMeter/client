import { DefaultTheme } from "styled-components/native";

export const palette = {
  pink: "#FFB5B5",
  pink_sub: "#FFE2E2",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#DEDEDE",
  subText: "#949496",
  shadow: "rgba(0, 0, 0, 0.10)",
  red: "#D0191C",
} as const;

export const THEME = {
  palette: palette,
} as const;
