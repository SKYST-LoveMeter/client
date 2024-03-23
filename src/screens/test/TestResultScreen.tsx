import MainButton from "@/components/@common/MainButton";
import Margin from "@/components/@common/Margin";
import PageHeader from "@/components/@common/PageHeader";
import Typography from "@/components/@common/Typography";
import Loading from "@/components/test/Loading";
import { MyPieChart } from "@/components/test/PieChart";
import { spacing } from "@/constants/spacing";
import { useAppDispatch, useAppSelect } from "@/store/configureStore.hooks";
import { Client } from "@/utils/api";
import { logError } from "@/utils/logError";
import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";

const dummy = [
  { name: "자신", percentage: 50 },
  { name: "애완동물", percentage: 0 },
  { name: "친구", percentage: 50 },
  { name: "자신", percentage: 50 },
  { name: "애완동물", percentage: 0 },
  { name: "친구", percentage: 50 },
];

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <View>
      <Typography size="lg" weight="bold">
        {title}
      </Typography>
      {children}
    </View>
  );
};

export default function TestResultScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { test_id, is_test } = route.params;
  console.log(test_id, is_test);
  const [isLoading, setIsLoading] = React.useState(false);

  const test = useAppSelect((state) => state.test);

  const dispatch = useAppDispatch();
  const token = useAppSelect((state) => state.auth.token);

  const sendResult = async () => {
    setIsLoading(true);

    try {
      const response = await Client.post<{}>(
        `test/${test.currentTestId}/result`,
        {
          love: test.result.love,
          effort: test.result.effort,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        // 받아서 작업하가ㅣ.

        console.log(response.data);
      }
    } catch (e) {
      logError(e);
    } finally {
      setIsLoading(false);
    }
  };

  const readResult = async () => {
    setIsLoading(true);

    try {
      const response = await Client.post<{}>(
        `test/${test.currentTestId}/result_view`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        // 받아서 작업하가ㅣ.

        console.log("read", response.data);
      }
    } catch (e) {
      logError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    is_test ? sendResult() : readResult();
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <PageHeader headerLeftShown={false} />

      {isLoading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Loading />
        </View>
      ) : (
        <ScrollView>
          <View
            style={{
              flex: 1,
              paddingHorizontal: spacing.gutter,
            }}
          >
            <Margin margin={20} />
            <MyPieChart data={dummy} title="결과" />
            <MyPieChart data={dummy} title="결과" />
            <Margin margin={30} />
            <Section title="이렇게 해보는건 어때요?">
              <View />
            </Section>
            <MainButton
              text="홈으로 가기"
              onPress={() => navigation.navigate("Home")}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
}
