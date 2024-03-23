import { DefaultTheme } from "styled-components/native";

export const palette = {
  pink: "#FFB5B5",
  pink_sub: "#FFE2E2",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#DEDEDE",
  gray_sub: "#858585",
  shadow: "rgba(0, 0, 0, 0.10)",
} as const;

export const THEME = {
  palette: palette,
} as const;
