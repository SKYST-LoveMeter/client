import { spacing } from "@/constants/spacing";
import { THEME } from "@/constants/theme";
import React from "react";
import { View } from "react-native";
import FlexBox from "../@common/FlexBox";
import Typography from "../@common/Typography";

const ProgressBar = ({ ratio }: { ratio: number }) => {
  return (
    <View>
      {/* <ShadowForProgressBar> */}
      <View
        style={{
          height: 40,
          backgroundColor: THEME.palette.gray,
          borderRadius: 30,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            width: `${ratio}%`,
            height: "100%",
            backgroundColor: THEME.palette.pink,
          }}
        />
      </View>
      {/* </ShadowForProgressBar> */}
      <FlexBox
        justifyContent="space-between"
        styles={{
          marginTop: spacing.small,
        }}
      >
        <Typography size="sm" color={THEME.palette.subText}>
          0%
        </Typography>
        <Typography size="sm" color={THEME.palette.subText}>
          100%
        </Typography>
      </FlexBox>
    </View>
  );
};

export default ProgressBar;
