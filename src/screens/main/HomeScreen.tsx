import FlexBox from "@/components/@common/FlexBox";
import Icons from "@/components/@common/Icons";
import MainButton from "@/components/@common/MainButton";
import { spacing } from "@/constants/spacing";
import useHeight from "@/hooks/useHeight";
import { useAppDispatch, useAppSelect } from "@/store/configureStore.hooks";
import { startTest } from "@/store/modules/test";
import { Client } from "@/utils/api";
import { logError } from "@/utils/logError";
import { showErrorToast } from "@/utils/showToast";
import React from "react";
import { Image, View } from "react-native";
import styled from "styled-components/native";

const Header = ({
  onPressCalendar,
  onPressSettings,
}: {
  onPressCalendar: () => void;
  onPressSettings: () => void;
}) => {
  const { NOTCH_TOP } = useHeight();
  return (
    <FlexBox
      justifyContent="space-between"
      alignItems="center"
      styles={{
        paddingTop: NOTCH_TOP,
        paddingHorizontal: spacing.offset,
      }}
    >
      <Image
        source={require("../../../assets/images/logo.png")}
        style={{
          width: 70,
          height: 70,
          resizeMode: "contain",
        }}
      />

      <FlexBox gap={spacing.offset}>
        <Icons
          name="calendar-month"
          type="materialIcons"
          size={32}
          onPress={onPressCalendar}
        />
        <Icons
          name="gear"
          type="fontAwesome"
          size={32}
          onPress={onPressSettings}
        />
      </FlexBox>
    </FlexBox>
  );
};

const Container = styled.ScrollView``;

const GoToTest = ({
  onPress,
  loading,
}: {
  onPress: () => void;
  loading: boolean;
}) => (
  <View
    style={{
      position: "absolute",
      bottom: 100,
      flexDirection: "row",
      flex: 1,
      paddingHorizontal: spacing.gutter,
    }}
  >
    <MainButton text="작성하기" onPress={onPress} isLoading={loading} />
  </View>
);

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = React.useState(false);

  const token = useAppSelect((state) => state.auth.token);

  const onPressWrite = async () => {
    // if (!token) {
    //   navigation.navigate("Login");
    //   return;
    // }

    setLoading(true);

    try {
      const response = await Client.post<{
        category: {
          [key: string]: string;
        };
        test_id: number;
      }>(
        "/test/",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log(response.data);

        if (!response.data.category || !response.data.test_id) {
          throw new Error("response data is not valid");
        }

        dispatch(
          startTest({
            category: response.data.category,
            testId: response.data.test_id,
          })
        );

        navigation.navigate("TestFirst");
      } else {
        throw new Error("error");
      }
    } catch (error) {
      logError(error);
      showErrorToast("테스트 시작에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header
        onPressCalendar={() => navigation.navigate("CalendarMain")}
        onPressSettings={() => navigation.navigate("SettingsMain")}
      />
      <Container>
        <Image
          source={require("../../../assets/images/illustration2.png")}
          style={{
            width: "100%",
            height: 250,
            resizeMode: "contain",
          }}
        />
      </Container>
      <GoToTest onPress={onPressWrite} loading={loading} />
    </>
  );
};

export default HomeScreen;
