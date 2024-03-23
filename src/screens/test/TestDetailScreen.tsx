import { View, Text } from "react-native";
import React, { useEffect } from "react";
import Typography from "@/components/@common/Typography";
import PageHeader from "@/components/@common/PageHeader";
import { Client } from "@/utils/api";
import { logError } from "@/utils/logError";
import { Dimensions } from "react-native";

import ContentsWrapper, {
  CenteredContentsWrapper,
} from "@/components/@common/ContentWrapper";
import { LineChart } from "react-native-chart-kit";
import styled, { useTheme } from "styled-components/native";
import Margin from "@/components/@common/Margin";
import { spacing } from "@/constants/spacing";
import { useAppSelect } from "@/store/configureStore.hooks";
import { showErrorToast } from "@/utils/showToast";

const ListItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 20px;
`;

interface TResult {
  efforts: string[];
  previous_loves: number[];
}

function padArray(arr: number[]) {
  if (arr.length >= 5) {
    return arr.slice(0, 5); // Trim the array if it's longer than 5
  } else {
    return arr.concat(new Array(5 - arr.length).fill(0)); // Pad the array with zeros
  }
}

export default function TestDetailScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const love_id = route.params.love_id;
  const name = route.params.name;

  const [isLoading, setIsLoading] = React.useState(true);

  const [result, setResult] = React.useState<TResult | null>(null);

  const token = useAppSelect((state) => state.auth.token);

  const calendarInfo = useAppSelect((state) => state.calendar);
  const TestIdFromCalendar = calendarInfo.currentTestId;
  const TestIdFromTest = useAppSelect((state) => state.test.currentTestId);

  const currentTestId = calendarInfo.isRead
    ? TestIdFromCalendar
    : TestIdFromTest;

  const getLoverDetail = async () => {
    setIsLoading(true);

    try {
      const response = await Client.post<TResult | null>(
        `test/${currentTestId}/result_detail/${love_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status !== 200)
        throw new Error("서버에서 데이터를 가져오는데 실패했습니다.");

      console.log(response.data);

      setResult(response.data);
    } catch (error) {
      logError(error);
      showErrorToast("데이터를 가져오는데 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLoverDetail();
  }, []);

  const arrayData = result ? padArray(result.previous_loves) : [0, 0, 0, 0, 0];

  const data = {
    labels: ["ㅇㄹ", "ㅋㅋ", "ㅈ", "ㄷ", "ㄱ"],
    datasets: [
      {
        data: arrayData,
        // data: [1, 2, 3, 4, 5, 6],
        // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["ㅇㄹㅇㄹ"], // optional
  };
  const screenWidth = Dimensions.get("window").width;

  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <PageHeader title={`${name}에 대해 쏟는 사랑`} />
      <Margin margin={spacing.gutter} />
      <CenteredContentsWrapper>
        <LineChart
          data={data}
          width={screenWidth - 100}
          height={220}
          chartConfig={{
            // backgroundColor: "#e26a00",
            // backgroundGradientFrom: "#fb8c00",
            // backgroundGradientTo: "#ffa726",
            backgroundColor: theme.palette.white,
            backgroundGradientFrom: theme.palette.white,
            backgroundGradientTo: theme.palette.white,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "4",
              strokeWidth: "1",
              // stroke: "#ffa726",
            },
          }}
        />
      </CenteredContentsWrapper>
      <Margin margin={spacing.gutter} />
      <ContentsWrapper>
        <Typography size="xl" weight="semibold">
          {name}에 대해
        </Typography>

        <Typography size="xl" weight="semibold">
          이런 일들을 하고 있어요
        </Typography>
      </ContentsWrapper>
      <Margin margin={spacing.gutter} />
      <View style={{ flex: 1 }}>
        <ContentsWrapper>
          {result?.efforts.map((effort, index) => (
            <ListItem key={index}>
              <Typography size="md">{effort}</Typography>
            </ListItem>
          ))}
        </ContentsWrapper>
      </View>
    </View>
  );
}
