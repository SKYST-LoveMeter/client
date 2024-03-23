import PageHeader from "@/components/@common/PageHeader";
import Box from "@/components/calendar/Box";
import { spacing } from "@/constants/spacing";
import { THEME } from "@/constants/theme";
import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  /* flex: 1; */
  padding: ${spacing.gutter}px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${spacing.gutter}px;
`;

const CalendarMainScreen = () => {
  return (
    <>
      <PageHeader />
      <ScrollView>
        <Container>
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
        </Container>
      </ScrollView>
    </>
  );
};

export default CalendarMainScreen;
