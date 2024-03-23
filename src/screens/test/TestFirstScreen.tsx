import { View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import PageHeader from "@/components/@common/PageHeader";
import Typography from "@/components/@common/Typography";
import styled from "styled-components/native";
import { spacing } from "@/constants/spacing";
import MainButton from "@/components/@common/MainButton";
import FlexBox from "@/components/@common/FlexBox";
import { THEME } from "@/constants/theme";
import { useAppSelect } from "@/store/configureStore.hooks";

const Container = styled.View`
  padding: 0 ${spacing.gutter}px 100px;
  flex: 1;
  justify-content: space-between;
`;

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
      {category.map((item) => (
        <Button
          key={item.id}
          text={item.name}
          isSelected={selectedIds.includes(item.id)}
          onPress={() => toggleSelectedId(item.id)}
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
      <Container>
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
          <Typography size="lg" styles={{ textAlign: "center" }}>
            현재 사랑하고 있는 것들을 선택해주세요
          </Typography>
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
      </Container>
    </>
  );
};

export default TestFirstScreen;
