import FlexBox from "@/components/@common/FlexBox";
import Icons from "@/components/@common/Icons";
import PageHeader from "@/components/@common/PageHeader";
import Typography from "@/components/@common/Typography";
import { spacing } from "@/constants/spacing";
import React from "react";
import { TouchableOpacity, View } from "react-native";

const Row = ({ onPress, text }: { onPress?: () => void; text: string }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FlexBox
        alignItems="center"
        justifyContent="space-between"
        styles={{
          paddingHorizontal: spacing.gutter,
          paddingVertical: spacing.padding,
        }}
      >
        <Typography size="md">{text}</Typography>
        <Icons type="feather" name="chevron-right" size={30} />
      </FlexBox>
    </TouchableOpacity>
  );
};

const SettingsMainScreen = () => {
  return (
    <View>
      <PageHeader title="설정" />
      <FlexBox
        alignItems="center"
        justifyContent="space-between"
        styles={{
          paddingHorizontal: spacing.gutter,
          paddingVertical: spacing.offset,
        }}
      >
        <Typography size="md">버전 정보</Typography>
        <Typography size="md">1.0.0</Typography>
      </FlexBox>

      <Row text="개인정보 처리방침" onPress={() => {}} />
      <Row text="이용 약관" onPress={() => {}} />
      <Row text="오픈소스 라이브러리" onPress={() => {}} />
    </View>
  );
};

export default SettingsMainScreen;
