import { View, Image } from "react-native";
import React, { useState } from "react";
import PageHeader from "@/components/@common/PageHeader";
import Typography from "@/components/@common/Typography";
import styled from "styled-components/native";
import { spacing } from "@/constants/spacing";
import MainButton from "@/components/@common/MainButton";
import FlexBox from "@/components/@common/FlexBox";
import { THEME } from "@/constants/theme";

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
}: {
  text: string;
  isSelected: boolean;
}) => {
  const [selected, setSelected] = useState(isSelected);

  const toggleSelected = () => setSelected(!selected);
  return (
    <ButtonContainer selected={selected} onPress={toggleSelected}>
      <Typography size="md" styles={{ textAlign: "center" }}>
        {text}
      </Typography>
    </ButtonContainer>
  );
};

const ButtonsContainer = () => {
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
      <Button text="나" isSelected={false} />
      <Button text="가족" isSelected={false} />
      <Button text="애완동물" isSelected={false} />
      <Button text="친구" isSelected={false} />
      <Button text="선생님" isSelected={false} />
      <Button text="커뮤니티" isSelected={false} />
      <Button text="자연" isSelected={false} />
      <Button text="직업" isSelected={false} />
      <Button text="취미" isSelected={false} />
    </FlexBox>
  );
};

const TestFirstScreen = ({ navigation }: { navigation: any }) => {
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
          <ButtonsContainer />
        </View>

        <MainButton
          text="다음"
          onPress={() => navigation.navigate("TestSecond")}
        />
      </Container>
    </>
  );
};

export default TestFirstScreen;
