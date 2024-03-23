import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import PageHeader from "@/components/@common/PageHeader";
import Typography from "@/components/@common/Typography";
import FlexBox from "@/components/@common/FlexBox";
import Margin from "@/components/@common/Margin";
import AuthForm from "@/components/AuthForm";
import ContentsWrapper, {
  CenteredContentsWrapper,
} from "@/components/@common/ContentWrapper";
import MainButton from "@/components/@common/MainButton";
import { spacing } from "@/constants/spacing";
import { useNavigation } from "@react-navigation/native";
import { AuthStackParamList } from "@/navigators/AuthStack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useAppDispatch } from "@/store/configureStore.hooks";
import { addToken, loginThunk } from "@/store/modules/auth";
import { Client } from "@/utils/api";
import { showErrorToast } from "@/utils/showToast";
import { storeData } from "@/utils/storage";
import { logError } from "@/utils/logError";

const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const dispatch = useAppDispatch();

  const [form, setForm] = useState({
    id: "",
    password: "",
  });

  const [loading, setLoading] = React.useState(false);

  // const onPressLogin = async () => {
  //   navigation.navigate("MainStack", {
  //     screen: "Home",
  //   });
  // };

  const onPressLogin = async () => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const response = await Client.post<{
        access: string;
      }>("/users/login/", {
        params: {
          username: form.id,
          password: form.password,
        },
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
        showErrorToast("로그인에 실패했습니다.");
      }
    } catch (error) {
      logError(error);
      showErrorToast("로그인에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const onPressSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <PageHeader headerLeftShown={false} />
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
          placeholder="아이디 입력"
          text={form.id}
          onChange={(text) => {
            setForm({
              ...form,
              id: text,
            });
          }}
        />
        <Margin margin={spacing.padding} />
        <AuthForm
          placeholder="패스워드 입력"
          text={form.password}
          onChange={(text) => {
            setForm({
              ...form,
              password: text,
            });
          }}
        />
        <Margin margin={50} />
        <MainButton text="Login" onPress={onPressLogin} isLoading={loading} />
        <Margin margin={spacing.offset} />
        <CenteredContentsWrapper>
          <FlexBox
            direction="row"
            justifyContent="center"
            gap={spacing.padding}
          >
            <Typography size="sm" weight="light">
              계정이 없으신가요?
            </Typography>
            <Pressable onPress={onPressSignUp}>
              <Typography size="sm" weight="light">
                회원가입
              </Typography>
            </Pressable>
          </FlexBox>
        </CenteredContentsWrapper>
      </ContentsWrapper>
    </View>
  );
};

export default LoginScreen;
