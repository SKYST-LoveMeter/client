import ContentsWrapper, {
  CenteredContentsWrapper,
} from "@/components/@common/ContentWrapper";
import FlexBox from "@/components/@common/FlexBox";
import Icons from "@/components/@common/Icons";
import MainButton from "@/components/@common/MainButton";
import Margin from "@/components/@common/Margin";
import PageHeader from "@/components/@common/PageHeader";
import Typography from "@/components/@common/Typography";
import AddEffortModal from "@/components/AddEffortModal";
import AddEffortValueModal from "@/components/AddEffortValueModal";
import TestContainer from "@/components/test/TestContainer";
import { spacing } from "@/constants/spacing";
import { useModal } from "@/hooks/useModal";
import { useAppDispatch, useAppSelect } from "@/store/configureStore.hooks";
import { addEffort } from "@/store/modules/test";
import { showErrorToast } from "@/utils/showToast";
import React from "react";
import { TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled, { useTheme } from "styled-components/native";

const EffortBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 12px;
  gap: 10px;
`;

const EffortBar = styled.Pressable<{ width: number }>`
  width: ${({ width }) => width}px;
  height: 25px;
  background-color: ${({ theme }) => theme.palette.pink};
  border-radius: 5px;
`;

const EffortBar2 = styled(EffortBar)`
  border-radius: 20px;
  height: 50px;
`;

const AddBtn = styled.TouchableOpacity`
  padding: 15px 30px;
  background-color: ${({ theme }) => theme.palette.gray};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EffortScrollView = styled.ScrollView`
  gap: 10px;
`;

const Effort = ({
  description,
  value,
}: {
  description: string;
  value: number;
}) => {
  const fullfilled = Array.from({ length: value }, (_, index) => index);

  const unfullfilled = Array.from({ length: 3 - value }, (_, index) => index);

  return (
    <EffortBox>
      <View
        style={{
          flex: 1,
        }}
      >
        <Typography size="md">{description}</Typography>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
        }}
      >
        {fullfilled.map((_, index) => (
          <EffortBar width={10} key={index} />
        ))}
        {unfullfilled.map((_, index) => (
          <EffortBar
            width={10}
            key={index}
            style={{ backgroundColor: "gray" }}
          />
        ))}
      </View>
    </EffortBox>
  );
};

export default function TestThirdScreen({ navigation }: { navigation: any }) {
  const result = useAppSelect((state) => state.test.result);
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const { bottom } = useSafeAreaInsets();

  const [effotToAdd, setEffortToAdd] = React.useState({
    description: "",
    value: 1,
  });

  const onPressNextBtn = () => {
    if (result.effort.length === 0) {
      showErrorToast("하나 이상 추가해주세요");
      return;
    }

    navigation.navigate("TestFourth");
  };

  const addEffortText = async () => {
    if (effotToAdd.description === "") {
      closeTextModal();
      return;
    }

    closeTextModal();

    await new Promise((resolve) => setTimeout(resolve, 500));

    openValueModal();
  };

  const onChangeEffortText = (text: string) => {
    setEffortToAdd({
      ...effotToAdd,
      description: text,
    });
  };

  const onPressEffortModalBtn = () => {
    closeValueModal();

    if (effotToAdd.value === 0) {
      showErrorToast("중요도는 0이 될 수 없습니다.");
      return;
    }

    dispatch(addEffort(effotToAdd));

    setEffortToAdd({
      description: "",
      value: 1,
    });
  };

  const {
    openModal: openTextModal,
    closeModal: closeTextModal,
    isModalVisible,
    setIsModalVisible,
  } = useModal();

  const {
    openModal: openValueModal,
    closeModal: closeValueModal,
    isModalVisible: isValueModalVisible,
    setIsModalVisible: setIsValueModalVisible,
  } = useModal();

  const onPressAddEffortBtn = () => {
    if (result.effort.length >= 10) {
      showErrorToast("10개 이상 추가할 수 없습니다.");
      return;
    }
    openTextModal();
  };

  const onPressEffortBar = (value: number) => {
    console.log(value);

    setEffortToAdd({
      ...effotToAdd,
      value,
    });
  };

  const onPressValueModalBackdrop = () => {
    setEffortToAdd({
      description: "",
      value: 1,
    });

    closeValueModal();
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <PageHeader />
      <TestContainer>
        {/* <ContentsWrapper> */}
        <CenteredContentsWrapper>
          <Typography>현재 몰두하고 있는 것들을</Typography>
          <Typography>10가지 이내로 적어주세요</Typography>
        </CenteredContentsWrapper>
        {/* </ContentsWrapper> */}
        <Margin margin={spacing.gutter} />
        <View
          style={{
            flex: 1,
          }}
        >
          <EffortScrollView
            contentContainerStyle={{
              rowGap: spacing.padding + 5,
              paddingBottom: 40,
            }}
          >
            {result.effort.map((effort, index) => (
              <Effort
                key={index}
                description={effort.description}
                value={effort.value}
              ></Effort>
            ))}
            <AddBtn onPress={onPressAddEffortBtn}>
              <Typography size="md" color={theme.palette.gray_sub}>
                +추가하세요
              </Typography>
            </AddBtn>
          </EffortScrollView>
        </View>
        <MainButton text="다음" onPress={onPressNextBtn} />
      </TestContainer>

      <AddEffortModal
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
      >
        <FlexBox justifyContent="space-between" alignItems="center">
          <TextInput
            placeholder="내용을 입력해주세요"
            style={{
              fontSize: 16,
              flex: 1,
              padding: 10,
              paddingLeft: 0,
            }}
            value={effotToAdd.description}
            onChangeText={onChangeEffortText}
          />
          <Icons
            type="AntDesign"
            name="upcircle"
            onPress={addEffortText}
            color={theme.palette.gray_sub}
            size={24}
          />
        </FlexBox>
      </AddEffortModal>
      <AddEffortValueModal
        onPressBackdrop={onPressValueModalBackdrop}
        isModalVisible={isValueModalVisible}
        setIsModalVisible={setIsValueModalVisible}
      >
        <CenteredContentsWrapper>
          <Typography size="lg">중요도를 표시해주세요</Typography>
        </CenteredContentsWrapper>
        <Margin margin={spacing.offset} />
        <FlexBox justifyContent="center" gap={20}>
          <Typography size="sm">1칸: 별로</Typography>
          <Typography size="sm">2칸: 보통</Typography>
          <Typography size="sm">3칸: 중요</Typography>
        </FlexBox>
        <Margin margin={spacing.padding} />

        <CenteredContentsWrapper>
          <FlexBox
            justifyContent="space-between"
            styles={{
              paddingVertical: 50,
            }}
            gap={30}
          >
            {Array.from({ length: effotToAdd.value }, (_, index) => index).map(
              (_, index) => (
                <EffortBar2
                  width={30}
                  key={index}
                  onPress={() => {
                    onPressEffortBar(index + 1);
                  }}
                />
              )
            )}
            {Array.from(
              { length: 3 - effotToAdd.value },
              (_, index) => index
            ).map((_, index) => (
              <EffortBar2
                width={30}
                key={index}
                style={{ backgroundColor: "gray" }}
                onPress={() => {
                  onPressEffortBar(index + 1 + effotToAdd.value);
                }}
              />
            ))}
          </FlexBox>
          <View
            style={{
              flex: 1,
              width: "100%",
              paddingHorizontal: 30,
            }}
          >
            <MainButton text="완료" onPress={onPressEffortModalBtn} />
          </View>
        </CenteredContentsWrapper>
      </AddEffortValueModal>
    </View>
  );
}
