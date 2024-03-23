import { View, Text, Image } from "react-native";
import React from "react";
import Typography from "../@common/Typography";
import FlexBox from "../@common/FlexBox";
import { spacing } from "@/constants/spacing";
import Margin from "../@common/Margin";

const Intro = ({ nickname }: { nickname: string }) => {
  return (
    <View
      style={{
        flex: 1,
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
      <Margin margin={50} />
      <FlexBox direction="column" alignItems="center" gap={5}>
        <Typography size="md">여러분은 사랑을 “잘"하며 살고 있나요?</Typography>
        <Typography size="md">
          여러분의 사랑을, 여러분이 사랑하는 것들에게
        </Typography>
        <Typography size="md">충분히 주고 있나요?</Typography>
        <Typography size="md">무한한 건 없듯이,</Typography>
        <Typography size="md">할 수 있는 사랑에는 한계가 있습니다.</Typography>
        <Typography size="md">너무 많은 것들을 신경쓰며,</Typography>
        <Typography size="md">바쁜 일상에 지친 사람들에게 차분히,</Typography>
        <Typography size="md">
          소중한 것들을 돌아볼 수 있는 서비스를 기획하고자
        </Typography>
        <Typography size="md">했습니다.</Typography>
      </FlexBox>
    </View>
  );
};

export default Intro;
