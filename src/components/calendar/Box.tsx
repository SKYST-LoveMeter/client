import { spacing } from "@/constants/spacing";
import { THEME } from "@/constants/theme";
import React from "react";
import styled from "styled-components/native";
import Typography from "../@common/Typography";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width: clientWidth } = Dimensions.get("window");

const Container = styled.TouchableOpacity`
  padding: ${spacing.gutter}px;
  border-radius: ${spacing.padding}px;
  background-color: ${THEME.palette.gray};
  width: ${(clientWidth - spacing.gutter * 3) / 2}px;
`;

const Box = () => {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.navigate("TestResult")}>
      <Typography size="md" styles={{ textAlign: "center" }}>
        Box
      </Typography>
    </Container>
  );
};

export default Box;
