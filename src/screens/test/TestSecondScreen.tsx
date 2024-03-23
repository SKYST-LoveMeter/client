import { View, Text } from "react-native";
import React from "react";
import PageHeader from "@/components/@common/PageHeader";
import MainButton from "@/components/@common/MainButton";
import { useNavigation } from "@react-navigation/native";
import ContentsWrapper, {
  CenteredContentsWrapper,
} from "@/components/@common/ContentWrapper";
import Typography from "@/components/@common/Typography";

const TestSecondScreen = ({
  route,
  navigation,
}: {
  route: {
    params: {
      selectedCat: number[];
    };
  };
  navigation: any;
}) => {
  const { selectedCat } = route.params;

  return (
    <View>
      <PageHeader />

      <MainButton
        text="다음"
        onPress={() => navigation.navigate("TestThird")}
      />
    </View>
  );
};

export default TestSecondScreen;
