import FlexBox from "@/components/@common/FlexBox";
import MainButton from "@/components/@common/MainButton";
import PageHeader from "@/components/@common/PageHeader";
import Typography from "@/components/@common/Typography";
import PercentSlider from "@/components/test/PercentSlider";
import ProgressBar from "@/components/test/ProgressBar";
import TestContainer from "@/components/test/TestContainer";
import TestQuestionText from "@/components/test/TestQuestionText";
import { spacing } from "@/constants/spacing";
import { THEME } from "@/constants/theme";
import { useAppDispatch, useAppSelect } from "@/store/configureStore.hooks";
import { setLove } from "@/store/modules/test";
import React, { useEffect } from "react";
import { View } from "react-native";

const PercentageControlBox = ({ id, name }: { id: number; name: string }) => {
  return (
    <View style={{ paddingTop: spacing.gutter }}>
      <Typography size="md">{name}</Typography>
      <PercentSlider id={id} />
      <FlexBox justifyContent="space-between">
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
  const { selectedCat } = route.params; // [1, 4]
  const { category } = useAppSelect((state) => state.test);

  const dispatch = useAppDispatch();
  useEffect(() => {
    const loveArr = selectedCat.map((id) => ({
      id,
      percentage: 0,
    }));
    dispatch(setLove(loveArr));
  }, [selectedCat]);
  return (
    <>
      <PageHeader />
      <TestContainer>
        <View style={{ gap: spacing.gutter, paddingTop: 50 }}>
          <TestQuestionText text="내가 사랑하고 있는 사람들이 나에게 얼마나 중요한지 분배해주세요" />
          <ProgressBar ratio={20} />
          <View>
            {selectedCat.map((id) => (
              <PercentageControlBox key={id} name={category[id]} id={id} />
            ))}
          </View>
        </View>
        <MainButton text="다음" onPress={() => {}} />
      </TestContainer>
    </>
  );
};

export default TestSecondScreen;
