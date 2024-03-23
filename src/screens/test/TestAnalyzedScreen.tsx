import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect } from "react";
import Typography from "@/components/@common/Typography";
import MainButton from "@/components/@common/MainButton";
import PageHeader from "@/components/@common/PageHeader";
import { spacing } from "@/constants/spacing";
import Margin from "@/components/@common/Margin";
import { THEME } from "@/constants/theme";
import { useAppSelect } from "@/store/configureStore.hooks";
import { Client } from "@/utils/api";
import { logError } from "@/utils/logError";
import Loading from "@/components/test/Loading";

const Section = ({ title, contents }: { title: string; contents: string }) => {
  return (
    <View style={{ paddingBottom: 20 }}>
      <Typography size="lg" weight="bold">
        {title}
      </Typography>
      <Margin margin={spacing.padding} />
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
          {contents}
        </Typography>
      </View>
    </View>
  );
};

const TestAnalyzedScreen = ({ navigation }: { navigation: any }) => {
  const { nickname } = useAppSelect((state) => state.auth);
  const [isLoading, setIsLoading] = React.useState(false);
  const token = useAppSelect((state) => state.auth.token);
  const getResult = async () => {
    setIsLoading(true);

    try {
      const response = await Client.post<{}>(
        `test`,
        {},
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
  //   useEffect(() => {
  //     getResult();
  //   }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Loading />
        </View>
      ) : (
        <>
          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: spacing.gutter,
              paddingTop: 80,
              paddingBottom: 200,
            }}
          >
            <Image
              source={require("../../../assets/images/illustration5.png")}
              style={{
                width: "70%",
                height: 300,
                resizeMode: "contain",
                alignSelf: "center",
              }}
            />

            <Section title={`내가 생각하는 중요도 1등`} contents={"000"} />
            <Section title={`실제 중요도 1등`} contents={"000"} />
            <Section
              title={` 내가 생각하는 중요도에 비해 실제 중요도가 가장 낮은 인물`}
              contents={"000"}
            />
            <Section
              title={"내가 생각하는 중요도에 비해 실제 중요도가 가장 높은 인물"}
              contents={"000"}
            />
            <Section
              title={
                "내가 중요하지 않았다고 생각했는데 실제로 내 삶에서 50%나 차지하고 있는 인물"
              }
              contents={"000"}
            />
            <Section
              title={"이렇게 해보는건 어때요?"}
              contents={
                "ㄴㅇ러ㅏㅣㄴ어라ㅣ어리ㅏㄴㅇ리어라ㅣㄴ어피ㅏㄴ아ㅣㄴ아리ㅓ너"
              }
            />

            <Margin margin={50} />
            <MainButton
              text="홈으로 가기"
              onPress={() => navigation.navigate("Home")}
            />
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default TestAnalyzedScreen;
