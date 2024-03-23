import FlexBox from "@/components/@common/FlexBox";
import Icons from "@/components/@common/Icons";
import PageHeader from "@/components/@common/PageHeader";
import Typography from "@/components/@common/Typography";
import { spacing } from "@/constants/spacing";
import { THEME } from "@/constants/theme";
import useResponsiveSize from "@/utils/useResponsiveSize";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

const Row = ({
  onPress,
  text,
  color,
}: {
  onPress?: () => void;
  text: string;
  color?: string;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FlexBox
        alignItems="center"
        justifyContent="space-between"
        styles={{
          paddingHorizontal: spacing.gutter,
          paddingVertical: useResponsiveSize(14),
        }}
      >
        <Typography size="md" color={color ? color : "black"}>
          {text}
        </Typography>
        <Icons type="feather" name="chevron-right" size={30} />
      </FlexBox>
    </TouchableOpacity>
  );
};

const Version = ({ version }: { version: string }) => (
  <FlexBox
    alignItems="center"
    justifyContent="space-between"
    styles={{
      paddingHorizontal: spacing.gutter,
      paddingVertical: useResponsiveSize(14),
    }}
  >
    <Typography size="md">버전 정보</Typography>
    <Typography size="md">{version}</Typography>
  </FlexBox>
);

const SectionContainer = styled.View`
  background-color: ${THEME.palette.gray};
  border-radius: 20px;
  padding: ${spacing.offset}px 0;
`;

const Section = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => (
  <View
    style={{
      marginVertical: spacing.padding,
      marginHorizontal: spacing.offset,
      gap: spacing.padding,
    }}
  >
    <Typography
      size="sm"
      color={THEME.palette.subText}
      styles={{
        paddingLeft: spacing.padding,
      }}
    >
      {title}
    </Typography>
    <SectionContainer>{children}</SectionContainer>
  </View>
);

const SettingsMainScreen = () => {
  return (
    <View>
      <PageHeader title="설정" />

      <Section title="계정 설정">
        <Row text="닉네임 변경" onPress={() => {}} />
        <Row text="비밀번호 변경" onPress={() => {}} />
      </Section>
      <Section title="앱 정보">
        <Version version="1.0.0" />
        <Row text="개인정보 처리방침" onPress={() => {}} />
        <Row text="이용 약관" onPress={() => {}} />
        <Row text="오픈소스 라이브러리" onPress={() => {}} />
      </Section>
      <Row text="로그아웃" onPress={() => {}} color={THEME.palette.red} />
    </View>
  );
};

export default SettingsMainScreen;
