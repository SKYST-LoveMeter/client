import { DefaultTheme } from "styled-components/native";

export const palette = {
  pink: "#FFB5B5",
  pink_sub: "#FFF1F1",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#949496",
} as const;

export const THEME = {
  palette: palette,
} as const;
