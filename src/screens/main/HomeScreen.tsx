import { View } from "react-native";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelect } from "@/store/configureStore.hooks";
import { login } from "@/store/modules/auth";
import PageHeader from "@/components/@common/PageHeader";
import MainButton from "@/components/@common/MainButton";
import Margin from "@/components/@common/Margin";

export default function HomeScreen() {
  const auth = useAppSelect((state) => state.auth);

  return (
    <View>
      <PageHeader title="시작" />
      <MainButton text="다음" onPress={() => {}} />
      <Margin margin={10} />
      <MainButton text="회원가입" onPress={() => {}} />
    </View>
  );
}
