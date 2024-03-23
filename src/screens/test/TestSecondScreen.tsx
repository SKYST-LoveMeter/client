import { View, Text } from "react-native";
import React from "react";
import PageHeader from "@/components/@common/PageHeader";

const TestSecondScreen = ({
  route,
}: {
  route: {
    params: {
      selectedCat: number[];
    };
  };
}) => {
  const { selectedCat } = route.params;

  return (
    <View>
      <PageHeader />
      <Text>TestSecondScreen</Text>
    </View>
  );
};

export default TestSecondScreen;
