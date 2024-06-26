import MainButton from "@/components/@common/MainButton";
import Margin from "@/components/@common/Margin";
import PageHeader from "@/components/@common/PageHeader";
import Typography from "@/components/@common/Typography";
import Loading from "@/components/test/Loading";
import { MyPieChart } from "@/components/test/PieChart";
import { spacing } from "@/constants/spacing";
import { useAppDispatch, useAppSelect } from "@/store/configureStore.hooks";
import { exitReadMode } from "@/store/modules/calendar";
import { Client } from "@/utils/api";
import { logError } from "@/utils/logError";
import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";

const dummy = [
  { name: "자신", percentage: 50, love_id: 1 },
  { name: "애완동물", percentage: 0, love_id: 2 },
  { name: "친구", percentage: 50, love_id: 3 },
  { name: "자신", percentage: 50, love_id: 4 },
  { name: "친구", percentage: 50, love_id: 5 },
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

interface IResult {
  before: { name: string; percentage: number; love_id: number }[];
  after: { name: string; percentage: number; love_id: number }[];
}

export default function TestResultScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { test_id, is_test } = route.params;
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      if (is_test) {
        dispatch(exitReadMode());
      }
    };
  }, []);

  const test = useAppSelect((state) => state.test);

  const token = useAppSelect((state) => state.auth.token);

  const [result1, setResult1] = React.useState<{
    before: { name: string; percentage: number; love_id: number }[];
    after: { name: string; percentage: number; love_id: number }[];
  }>({
    before: [],
    after: [],
  });

  useEffect(() => {
    console.log(result1);
  }, [result1]);

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

        console.log("response data", response.data);

        setResult1(response.data);
      }
    } catch (e) {
      console.log("오류");

      logError(e);
    } finally {
      setIsLoading(false);
    }
  };

  const readResult = async () => {
    setIsLoading(true);

    try {
      const response = await Client.post<{}>(
        `test/${test_id}/result_view`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        // 받아서 작업하가ㅣ.

        setResult1(response.data);
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
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Loading />
        </View>
      ) : (
        <>
          <PageHeader headerLeftShown={false} />
          <ScrollView>
            <View
              style={{
                flex: 1,
                paddingHorizontal: spacing.gutter,
              }}
            >
              <Margin margin={20} />
              {/* <MyPieChart data={beforeData} title="나의 우선순위" /> */}
              {/* <MyPieChart data={afterData} title="실제로 시간쏟는 대상" /> */}
              <MyPieChart data={result1.before} title="나의 우선순위" />
              <MyPieChart data={result1.after} title="실제로 시간쏟는 대상" />
              <Margin margin={30} />

              <MainButton
                text="분석 결과 보러가기"
                onPress={() =>
                  navigation.navigate("TestAnalyzed", {
                    testId: is_test ? test.currentTestId : test_id,
                  })
                }
              />
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
}
