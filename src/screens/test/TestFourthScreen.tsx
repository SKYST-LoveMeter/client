import { View, Text } from "react-native";
import React from "react";
import PageHeader from "@/components/@common/PageHeader";
import ContentsWrapper, {
  CenteredContentsWrapper,
} from "@/components/@common/ContentWrapper";
import Typography from "@/components/@common/Typography";

export default function TestFourthScreen() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <PageHeader />
      <ContentsWrapper>
        <CenteredContentsWrapper>
          <Typography> 000님이 현재 몰두하고 있는</Typography>
        </CenteredContentsWrapper>
      </ContentsWrapper>
    </View>
  );
}
