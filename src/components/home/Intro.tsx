import { View, Text, Image } from "react-native";
import React from "react";
import Typography from "../@common/Typography";
import FlexBox from "../@common/FlexBox";
import { spacing } from "@/constants/spacing";

const Intro = ({ nickname }: { nickname: string }) => {
  return (
    <View
      style={{
        backgroundColor: "#FFEBEB",
        paddingHorizontal: spacing.gutter,
        paddingTop: 0,
        paddingBottom: 50,
      }}
    >
      <Image
        source={require("../../../assets/images/illustration2.png")}
        style={{
          width: "100%",
          height: 250,
          resizeMode: "contain",
        }}
      />
      <FlexBox direction="column" alignItems="center" gap={5}>
        <Typography size="md">당신은 효율적인 사랑을 하고 있나요?</Typography>
        <Typography size="md">
          현대인들은 너무 많은 것들을 사랑하고 있어요.
        </Typography>
        <Typography
          size="md"
          styles={{
            textAlign: "center",
          }}
        >
          {nickname}님의 생각이 정리될 수 있도록 우리가 도와줄게요{" "}
        </Typography>
      </FlexBox>
    </View>
  );
};

export default Intro;
