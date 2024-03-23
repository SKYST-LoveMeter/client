import PageHeader from "@/components/@common/PageHeader";
import Box from "@/components/calendar/Box";
import { spacing } from "@/constants/spacing";
import { THEME } from "@/constants/theme";
import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

const dummy = [
  {
    test_id: 1,
    created_at: "2021-03-12T00:00:00.000Z",
  },
  {
    test_id: 3,
    created_at: "2021-03-12T00:00:00.000Z",
  },
  {
    test_id: 4,
    created_at: "2021-03-12T00:00:00.000Z",
  },
];

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
          {dummy.map((item) => (
            <Box
              key={item.test_id}
              testId={item.test_id}
              date={item.created_at}
            />
          ))}
        </Container>
      </ScrollView>
    </>
  );
};

export default CalendarMainScreen;
