import FlexBox from "@/components/@common/FlexBox";
import MainButton from "@/components/@common/MainButton";
import PageHeader from "@/components/@common/PageHeader";
import Typography from "@/components/@common/Typography";
import TestContainer from "@/components/test/TestContainer";
import TestQuestionText from "@/components/test/TestQuestionText";
import { spacing } from "@/constants/spacing";
import { THEME } from "@/constants/theme";
import { useAppSelect } from "@/store/configureStore.hooks";
import React, { useState } from "react";
import { Image, View } from "react-native";
import styled from "styled-components/native";

const ButtonContainer = styled.TouchableOpacity<{ selected: boolean }>`
  background-color: ${({ selected }) =>
    selected ? THEME.palette.pink : THEME.palette.pink_sub};
  padding: ${spacing.offset}px;
  border-radius: ${spacing.offset}px;
`;

const Button = ({
  text,
  isSelected,
  onPress,
}: {
  text: string;
  isSelected: boolean;
  onPress: () => void;
}) => {
  return (
    <ButtonContainer selected={isSelected} onPress={onPress}>
      <Typography size="md" styles={{ textAlign: "center" }}>
        {text}
      </Typography>
    </ButtonContainer>
  );
};

const ButtonsContainer = ({
  selectedIds,
  setSelectedIds,
}: {
  selectedIds: number[];
  setSelectedIds: React.Dispatch<React.SetStateAction<number[]>>;
}) => {
  const { category } = useAppSelect((state) => state.test);

  const toggleSelectedId = (id: number) => {
    setSelectedIds((currentSelectedIds) =>
      currentSelectedIds.includes(id)
        ? currentSelectedIds.filter((selectedId) => selectedId !== id)
        : [...currentSelectedIds, id]
    );
  };

  return (
    <FlexBox
      gap={spacing.padding}
      justifyContent="center"
      styles={{
        flexWrap: "wrap",
        paddingHorizontal: spacing.offset,
        paddingTop: 50,
      }}
    >
      {Object.entries(category).map(([id, name]) => (
        <Button
          key={id}
          text={name}
          isSelected={selectedIds.includes(parseInt(id))}
          onPress={() => toggleSelectedId(parseInt(id))}
        />
      ))}
    </FlexBox>
  );
};

const TestFirstScreen = ({ navigation }: { navigation: any }) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  return (
    <>
      <PageHeader />
      <TestContainer>
        <View>
          <Image
            source={require("../../../assets/images/illustration1.png")}
            style={{
              width: "70%",
              height: 300,
              resizeMode: "contain",
              alignSelf: "center",
            }}
          />

          <TestQuestionText text="현재 사랑하고 있는 것들을 선택해주세요" />
          <ButtonsContainer
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
          />
        </View>

        <MainButton
          text="다음"
          onPress={() =>
            navigation.navigate("TestSecond", {
              selectedCat: selectedIds.sort((a, b) => a - b),
            })
          }
        />
      </TestContainer>
    </>
  );
};

export default TestFirstScreen;
