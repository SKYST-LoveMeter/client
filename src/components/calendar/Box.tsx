import { spacing } from "@/constants/spacing";
import { THEME } from "@/constants/theme";
import React from "react";
import styled from "styled-components/native";
import Typography from "../@common/Typography";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { formatDate } from "@/utils/formatDate";

const { width: clientWidth } = Dimensions.get("window");

const Container = styled.TouchableOpacity`
  padding: ${spacing.gutter}px ${spacing.offset}px;
  border-radius: ${spacing.padding}px;
  background-color: ${THEME.palette.gray};
  width: ${(clientWidth - spacing.gutter * 3) / 2}px;
`;

const Box = ({ testId, date }: { testId: number; date: string }) => {
  const navigation = useNavigation();

  return (
    <Container
      onPress={() =>
        navigation.navigate("TestResult", { test_id: testId, is_test: false })
      }
    >
      <Typography size="md" styles={{ textAlign: "center" }}>
        {formatDate(date)}의 기록
      </Typography>
    </Container>
  );
};

export default Box;
