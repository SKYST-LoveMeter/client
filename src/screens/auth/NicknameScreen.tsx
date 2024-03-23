import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import PageHeader from "@/components/@common/PageHeader";
import FlexBox from "@/components/@common/FlexBox";
import Typography from "@/components/@common/Typography";
import Margin from "@/components/@common/Margin";
import AuthForm from "@/components/AuthForm";
import { spacing } from "@/constants/spacing";
import ContentsWrapper from "@/components/@common/ContentWrapper";
import MainButton from "@/components/@common/MainButton";
import { useAppDispatch, useAppSelect } from "@/store/configureStore.hooks";
import { showErrorToast } from "@/utils/showToast";
import { Client } from "@/utils/api";
import { addToken, onChangeSignUpForm } from "@/store/modules/auth";
import { AuthStackParamList } from "@/navigators/AuthStack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { storeData } from "@/utils/storage";
import { logError } from "@/utils/logError";

export default function NicknameScreen() {
  const form = useAppSelect((state) => state.auth.signUpForm);

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const dispatch = useAppDispatch();

  const [loading, setLoading] = React.useState(false);

  // const onPressSignUp = async () => {
  //   navigation.navigate("MainStack", {
  //     screen: "Home",
  //   });
  // };

  const onPressSignUp = async () => {
    let hasError = false;

    if (loading) {
      return;
    }

    setLoading(true);

    if (form.nickname === "") {
      showErrorToast("닉네임을 입력해주세요.");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    try {
      const response = await Client.post("/users/signup/", {
        username: form.id,
        password: form.password,
        real_name: form.nickname,
      });

      if (response.status === 200) {
        if (!response.data.access) {
          throw new Error("Token is not provided");
        }

        await storeData("token", response.data.access);

        dispatch(addToken(response.data.access));

        navigation.navigate("MainStack", {
          screen: "Home",
        });
      } else {
        showErrorToast("회원가입에 실패했습니다.");
      }
    } catch (error) {
      logError(error);
      showErrorToast("회원가입에 실패했습니다.");
    } finally {
      setLoading(false);
    }
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
          사용하실 닉네임을 입력해주세요.
        </Typography>
      </FlexBox>
      <Margin margin={spacing.gutter} />
      <ContentsWrapper>
        <AuthForm
          placeholder="사용자 이름을 입력해주세요"
          text={form.nickname}
          onChange={(text) => onChangeValue("nickname", text)}
        />
        <Margin margin={100} />
        <MainButton
          text="회원가입"
          onPress={onPressSignUp}
          isLoading={loading}
        />
      </ContentsWrapper>
    </View>
  );
}
