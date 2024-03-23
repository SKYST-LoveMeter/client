import ShadowForProgressBar from "@/components/@common/CustomShadow";
import FlexBox from "@/components/@common/FlexBox";
import PageHeader from "@/components/@common/PageHeader";
import Typography from "@/components/@common/Typography";
import TestContainer from "@/components/test/TestContainer";
import TestQuestionText from "@/components/test/TestQuestionText";
import { spacing } from "@/constants/spacing";
import { THEME } from "@/constants/theme";
import React from "react";
import { View } from "react-native";

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
            width: `${ratio * 100}%`,
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

const TestSecondScreen = ({
  route,
}: {
  route: {
    params: {
      selectedCat: number[];
    };
  };
}) => {
  const { selectedCat } = route.params;

  return (
    <>
      <PageHeader />
      <TestContainer>
        <TestQuestionText text="내가 사랑하고 있는 사람들이 나에게 얼마나 중요한지 분배해주세요" />
        <ProgressBar ratio={0.2} />
      </TestContainer>
    </>
  );
};

export default TestSecondScreen;
