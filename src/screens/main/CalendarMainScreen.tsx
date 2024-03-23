import PageHeader from "@/components/@common/PageHeader";
import Box from "@/components/calendar/Box";
import { spacing } from "@/constants/spacing";
import { useAppSelect } from "@/store/configureStore.hooks";
import { Client } from "@/utils/api";
import { logError } from "@/utils/logError";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  padding: ${spacing.gutter}px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${spacing.gutter}px;
`;

const CalendarMainScreen = () => {
  const [loading, setLoading] = useState(false);
  const token = useAppSelect((state) => state.auth.token);
  const [data, setData] = useState([]);
  const getData = async () => {
    setLoading(true);

    try {
      const response = await Client.get<{}>(
        `test/calendar`,

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
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <PageHeader />

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 100,
          }}
        >
          <Container>
            {data.map((item, index) => (
              <Box
                index={index}
                key={item.test_id}
                testId={item.test_id}
                date={item.created_at}
              />
            ))}
          </Container>
        </ScrollView>
      )}
    </>
  );
};

export default CalendarMainScreen;
