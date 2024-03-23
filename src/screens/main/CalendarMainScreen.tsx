import PageHeader from "@/components/@common/PageHeader";
import Box from "@/components/calendar/Box";
import { spacing } from "@/constants/spacing";
import { useAppSelect } from "@/store/configureStore.hooks";
import { Client } from "@/utils/api";
import { logError } from "@/utils/logError";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  padding: ${spacing.gutter}px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${spacing.gutter}px;
`;

const CalendarMainScreen = () => {
  const token = useAppSelect((state) => state.auth.token);
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await Client.post<{}>(
        `test/calendar`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setData(response.data);
      }
    } catch (e) {
      logError(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <PageHeader />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Container>
          {data.map((item) => (
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
