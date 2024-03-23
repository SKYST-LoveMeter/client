import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import PageHeader from "@/components/@common/PageHeader";
import Typography from "@/components/@common/Typography";
import Margin from "@/components/@common/Margin";
import { Client } from "@/utils/api";
import { useAppSelect } from "@/store/configureStore.hooks";

export default function TestResultScreen() {
  const [isLoading, setIsLoading] = React.useState(false);

  const test = useAppSelect((state) => state.test);

  const sendResult = () => {};

  useEffect(() => {
    setIsLoading(true);
    // 여기서 api 호출

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <PageHeader headerLeftShown={false}></PageHeader>

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
        <View
          style={{
            flex: 1,
          }}
        >
          <Typography size="lg" weight="bold">
            결과
          </Typography>
          <Margin margin={20} />
          <Text>결과 내용</Text>
        </View>
      )}
    </View>
  );
}
