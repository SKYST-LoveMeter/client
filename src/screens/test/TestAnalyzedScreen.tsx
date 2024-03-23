import { View, Text } from "react-native";
import React from "react";
import Typography from "@/components/@common/Typography";
import MainButton from "@/components/@common/MainButton";
import PageHeader from "@/components/@common/PageHeader";
import { spacing } from "@/constants/spacing";
import Margin from "@/components/@common/Margin";
import { THEME } from "@/constants/theme";
import { useAppSelect } from "@/store/configureStore.hooks";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <View style={{ paddingBottom: 400 }}>
      <Typography size="lg" weight="bold">
        {title}
      </Typography>
      <Margin margin={spacing.padding} />
      {children}
    </View>
  );
};

const TestAnalyzedScreen = ({ navigation }: { navigation: any }) => {
  const { nickname } = useAppSelect((state) => state.auth);
  return (
    <>
      <PageHeader headerLeftShown={false} />
      <View
        style={{
          paddingHorizontal: spacing.gutter,
          flex: 1,
        }}
      >
        <Section title={`${nickname}님의 분석 결과`}>
          <View
            style={{
              backgroundColor: THEME.palette.gray,
              borderRadius: 20,
              padding: spacing.offset,
            }}
          >
            <Typography
              size="md"
              styles={{
                lineHeight: 25,
              }}
            >
              "테스트 결과에 따라 추천하는 내용 테스트 결과에 따라 추천하는 내용
              테스트 결과에 따라 추천하는 내용"
            </Typography>
          </View>
        </Section>

        <MainButton
          text="홈으로 가기"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </>
  );
};

export default TestAnalyzedScreen;
