import FlexBox from "@/components/@common/FlexBox";
import Icons from "@/components/@common/Icons";
import MainButton from "@/components/@common/MainButton";
import { MyPieChart } from "@/components/test/PieChart";
import { spacing } from "@/constants/spacing";
import useHeight from "@/hooks/useHeight";
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

const GoToTest = ({ onPress }: { onPress: () => void }) => (
  <View
    style={{
      position: "absolute",
      bottom: 100,
      flexDirection: "row",
      flex: 1,
      paddingHorizontal: spacing.gutter,
    }}
  >
    <MainButton text="작성하기" onPress={onPress} />
  </View>
);

const HomeScreen = ({ navigation }: { navigation: any }) => {
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
      <GoToTest onPress={() => navigation.navigate("TestFirst")} />
    </>
  );
};

export default HomeScreen;
