import { View, Text, Image } from "react-native";
import React from "react";
import PageHeader from "@/components/@common/PageHeader";
import ContentsWrapper, {
  CenteredContentsWrapper,
} from "@/components/@common/ContentWrapper";
import Typography from "@/components/@common/Typography";
import { useAppDispatch, useAppSelect } from "@/store/configureStore.hooks";
import styled from "styled-components/native";
import MainButton from "@/components/@common/MainButton";
import Margin from "@/components/@common/Margin";
import {
  ToggleLoversToCurrentEffort,
  decreaseFourthScreenIndex,
  increaseFourthScreenIndex,
} from "@/store/modules/test";
import Icons from "@/components/@common/Icons";
import TestContainer from "@/components/test/TestContainer";
import { showErrorToast } from "@/utils/showToast";
import TestQuestionText from "@/components/test/TestQuestionText";

const LoveListItemBox = styled.Pressable<{ isSelected: boolean }>`
  padding: 10px 30px;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.palette.pink : theme.palette.gray};
  border-radius: 99px;
`;

const LoveListItem = ({
  isSelected,
  text,
  onPress,
}: {
  isSelected: boolean;
  text: string;
  onPress: () => void;
}) => {
  return (
    <LoveListItemBox isSelected={isSelected} onPress={onPress}>
      <Typography size="md">{text}</Typography>
    </LoveListItemBox>
  );
};

export default function TestFourthScreen({ navigation }: { navigation: any }) {
  const efforts = useAppSelect((state) => state.test.result.effort);
  const currentIndex = useAppSelect((state) => state.test.fourthScreenIndex);

  const dispatch = useAppDispatch();

  const category = useAppSelect((state) => state.test.category);

  const loveList = useAppSelect((state) => state.test.result.love);

  const currentEffort = efforts[currentIndex];

  console.log("currentEffort", currentEffort);

  const onPressNext = () => {
    if (currentEffort.lovers.length === 0) {
      showErrorToast("하나 이상 선택해주세요");
      return;
    }

    if (currentIndex === efforts.length - 1) {
      navigation.push("TestResult");
    } else {
      dispatch(increaseFourthScreenIndex());
      navigation.push("TestFourth");
    }

    // 만약에 index가 len(array) - 1 이면 다음 화면으로 넘어가기
  };

  const onPressLoveListItem = (id: number) => {
    dispatch(
      ToggleLoversToCurrentEffort({
        loverId: id,
      })
    );
    // id를 현재
  };

  const onPressBack = () => {
    navigation.goBack();

    if (currentIndex > 0) {
      dispatch(decreaseFourthScreenIndex());
    }
  };

  console.log("currentIndex", currentEffort);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <PageHeader
        headerLeft={
          <Icons
            type="feather"
            name="chevron-left"
            size={35}
            onPress={onPressBack}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          />
        }
      />
      <TestContainer>
        <Image
          source={require("../../../assets/images/illustration4.png")}
          style={{
            width: "70%",
            height: 300,
            resizeMode: "contain",
            alignSelf: "center",
          }}
        />
        {/* <ContentsWrapper> */}
        <View style={{ flex: 1 }}>
          <TestQuestionText
            text={`00님이 현재 몰두하고 있는 ${currentEffort.description}는 무엇을 위해 하고있나요?`}
          />

          <Margin margin={30} />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
            }}
          >
            {loveList.map((love) => (
              <LoveListItem
                key={love.id}
                isSelected={currentEffort.lovers.includes(love.id)}
                onPress={() => {
                  onPressLoveListItem(love.id);
                }}
                text={category[love.id]}
              ></LoveListItem>
            ))}
          </View>
        </View>
        {/* </ContentsWrapper> */}
        <ContentsWrapper>
          <MainButton
            onPress={onPressNext}
            text={
              currentIndex === efforts.length - 1 ? "결과 확인하기" : "다음"
            }
          />
        </ContentsWrapper>
      </TestContainer>
    </View>
  );
}
