import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import React from "react";
import { THEME } from "@/constants/theme";
import Typography from "./Typography";
import useResponsiveSize from "@/utils/useResponsiveSize";

type ButtonTheme = "primary";

const ButtonColor = {
  primary: {
    background: {
      def: THEME.palette.pink,
      pressed: THEME.palette.pink,
      disabled: THEME.palette.pink,
    },
    border: {
      def: "transparent",
      pressed: "transparent",
      disabled: "transparent",
    },
    font: {
      size: "sm",
      weight: "medium",
      def: THEME.palette.white,
    },
  },
} as const;

const ButtonPadding = {
  primary: {
    paddingHorizontal: 10,
    paddingVertical: useResponsiveSize(13),
  },
} as const;

const ButtonRadius = {
  primary: 30,
} as const;

const MainButton = ({
  text,
  onPress,
  variant = "primary",
  isLoading = false,
  fixedWidth,
  accessibilityLabel,
  paddingVariant,
  radiusVariant,
  flex,
  isActive = false,
  disabled = false,
}: {
  text: string;
  isLoading?: boolean;
  onPress: () => void;
  variant?: ButtonTheme;
  paddingVariant?: ButtonTheme;
  radiusVariant?: ButtonTheme;
  fixedWidth?: number;
  flex?: number;
  accessibilityLabel?: string;
  disabled?: boolean;
  isActive?: boolean;
}) => {
  const buttonState = disabled ? "disabled" : isActive ? "pressed" : "def";

  return (
    <View
      style={[
        {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: fixedWidth ?? "100%",
          ...(flex && { flex: flex }),
        },
      ]}
    >
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: ButtonColor[variant]["background"][buttonState],
          ...{
            borderWidth: 1,
            borderColor: ButtonColor[variant]["border"][buttonState],
          },
          width: "100%",
          ...{
            borderRadius: radiusVariant
              ? ButtonRadius[radiusVariant]
              : ButtonRadius[variant],
          },
          paddingVertical: paddingVariant
            ? ButtonPadding[paddingVariant]["paddingVertical"]
            : ButtonPadding[variant]["paddingVertical"],
          paddingHorizontal: paddingVariant
            ? ButtonPadding[paddingVariant]["paddingHorizontal"]
            : ButtonPadding[variant]["paddingHorizontal"],
          justifyContent: "center",
          alignItems: "center",
        }}
        disabled={disabled}
        accessible
        accessibilityLabel={
          accessibilityLabel ? accessibilityLabel : `${text} 버튼`
        }
      >
        {isLoading ? (
          <View
            style={{
              top: 1.5,
            }}
          >
            <ActivityIndicator size="small" color={THEME.palette.black} />
          </View>
        ) : (
          <Typography
            size={ButtonColor[variant]["font"]["size"]}
            color={ButtonColor[variant]["font"]["def"]}
            weight={ButtonColor[variant]["font"]["weight"]}
          >
            {text}
          </Typography>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default MainButton;
