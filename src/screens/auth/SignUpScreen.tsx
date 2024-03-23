import { View, Text, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import PageHeader from "@/components/@common/PageHeader";
import FlexBox from "@/components/@common/FlexBox";
import Typography from "@/components/@common/Typography";
import Margin from "@/components/@common/Margin";
import ContentsWrapper, {
  CenteredContentsWrapper,
} from "@/components/@common/ContentWrapper";
import AuthForm from "@/components/AuthForm";
import { spacing } from "@/constants/spacing";
import { AuthStackParamList } from "@/navigators/AuthStack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import MainButton from "@/components/@common/MainButton";
import { Client } from "@/utils/api";
import { useAppDispatch, useAppSelect } from "@/store/configureStore.hooks";
import { showErrorToast } from "@/utils/showToast";
import {
  addToken,
  onChangeSignUpForm,
  resetSignUpForm,
} from "@/store/modules/auth";

export default function SignUpScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const form = useAppSelect((state) => state.auth.signUpForm);

  useEffect(() => {
    return () => {
      dispatch(resetSignUpForm());
    };
  }, []);

  const dispatch = useAppDispatch();

  const onPressSignUp = async () => {
    let hasError = false;

    if (form.id === "") {
      showErrorToast("아이디를 입력해주세요.");
      hasError = true;
    }

    if (form.password === "") {
      showErrorToast("비밀번호를 입력해주세요.");
      hasError = true;
    }

    if (form.passwordCheck === "") {
      showErrorToast("비밀번호 확인을 입력해주세요.");
      hasError = true;
    }

    if (form.password !== form.passwordCheck) {
      showErrorToast("비밀번호가 일치하지 않습니다.");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    navigation.navigate("Nickname");
  };

  const onPressLogin = () => {
    navigation.navigate("Nickname");
  };

  const onChangeValue = (
    key: "id" | "password" | "passwordCheck" | "nickname",
    value: string
  ) => {
    dispatch(
      onChangeSignUpForm({
        key,
        value,
      })
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <PageHeader />
      <FlexBox direction="column" alignItems="center" justifyContent="center">
        <Image
          source={require("@/../assets/images/logo.png")}
          style={{
            width: 200,
            height: 200,
            resizeMode: "contain",
          }}
        ></Image>
        <Typography size="xl" weight="bold">
          Love Meter
        </Typography>
        <Margin margin={10} />
        <Typography size="md" weight="light">
          Find out how much you love each other
        </Typography>
      </FlexBox>
      <Margin margin={spacing.gutter} />
      <ContentsWrapper>
        <AuthForm
          placeholder="dfdf"
          text={form.id}
          onChange={(text) => onChangeValue("id", text)}
        />
        <Margin margin={spacing.padding} />
        <AuthForm
          placeholder="dfdf"
          text={form.password}
          onChange={(text) => onChangeValue("password", text)}
        />
        <Margin margin={spacing.padding} />

        <AuthForm
          placeholder="dfdf"
          text={form.passwordCheck}
          onChange={(text) => onChangeValue("passwordCheck", text)}
        />
        <Margin margin={50} />
        <MainButton text="다음으로" onPress={onPressSignUp} />
        <Margin margin={spacing.offset} />
        <CenteredContentsWrapper>
          <FlexBox
            direction="row"
            justifyContent="center"
            gap={spacing.padding}
          >
            <Typography size="sm" weight="light">
              이미 계정이 있으신가요?
            </Typography>
            <Pressable onPress={onPressLogin}>
              <Typography size="sm" weight="light">
                로그인
              </Typography>
            </Pressable>
          </FlexBox>
        </CenteredContentsWrapper>
      </ContentsWrapper>
    </View>
  );
}
