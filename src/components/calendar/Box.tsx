import { spacing } from "@/constants/spacing";
import { THEME } from "@/constants/theme";
import React from "react";
import styled from "styled-components/native";
import Typography from "../@common/Typography";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { formatDate } from "@/utils/formatDate";
import { useAppDispatch } from "@/store/configureStore.hooks";
import { enterReadMode } from "@/store/modules/calendar";

const { width: clientWidth } = Dimensions.get("window");

const Container = styled.TouchableOpacity`
  padding: ${spacing.gutter}px ${spacing.offset}px;
  border-radius: ${spacing.padding}px;
  background-color: ${THEME.palette.gray};
  width: ${(clientWidth - spacing.gutter * 3) / 2}px;
`;

const Box = ({
  testId,
  date,
  index,
}: {
  testId: number;
  date: string;
  index: number;
}) => {
  const navigation = useNavigation();

  const dispatch = useAppDispatch();

  const onPressTestRsult = () => {
    dispatch(
      enterReadMode({
        testId,
      })
    );
    navigation.navigate("TestResult", { test_id: testId, is_test: false });
  };

  return (
    <Container onPress={onPressTestRsult}>
      <Typography size="md" styles={{ textAlign: "center" }}>
        {formatDate(date, index)}의 기록
      </Typography>
    </Container>
  );
};

export default Box;
