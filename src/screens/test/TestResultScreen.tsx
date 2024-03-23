import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect } from "react";
import PageHeader from "@/components/@common/PageHeader";
import Typography from "@/components/@common/Typography";
import Margin from "@/components/@common/Margin";
import { Client } from "@/utils/api";
import { useAppSelect } from "@/store/configureStore.hooks";
import { logError } from "@/utils/logError";
import { MyPieChart } from "@/components/test/PieChart";
import { spacing } from "@/constants/spacing";
import MainButton from "@/components/@common/MainButton";

const dummy = [
  {
    name: "부모님",
    percentage: 20,
  },
  {
    name: "연인",
    percentage: 40,
  },
  {
    name: "나",
    percentage: 20,
  },
];

export default function TestResultScreen({ navigation }: { navigation: any }) {
  const [isLoading, setIsLoading] = React.useState(false);

  const test = useAppSelect((state) => state.test);

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

  useEffect(() => {
    sendResult();
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* <PageHeader headerLeftShown={false} /> */}
      <PageHeader />

      {isLoading ? (
        <>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography size="lg" weight="medium">
              결과 계산중
            </Typography>
            <Margin margin={20} />
            <ActivityIndicator size="large" color="black" />
          </View>
        </>
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
