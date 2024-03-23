import { View, Text } from "react-native";
import React from "react";
import { spacing } from "@/constants/spacing";

export default function ContentsWrapper({
  children,
  flex,
}: {
  children: React.ReactNode;
  flex?: number;
}) {
  return (
    <View
      style={{
        paddingHorizontal: spacing.gutter,
        ...(flex && { flex: 1 }),
      }}
    >
      {children}
    </View>
  );
}

export const CenteredContentsWrapper = ({
  children,
  accessible,
}: {
  children: React.ReactNode;
  accessible?: boolean;
}) => {
  return (
    <View
      accessible={accessible}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </View>
  );
};
