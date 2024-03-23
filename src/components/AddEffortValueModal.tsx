import { View, Text } from "react-native";
import React from "react";
import BottomModal from "./@common/BottomModal";

export default function AddEffortValueModal({
  isModalVisible,
  setIsModalVisible,
  children,
  onPressBackdrop,
}: {
  isModalVisible: boolean;
  setIsModalVisible: (arg: boolean) => void;
  onPressBackdrop: () => void;
  children: React.ReactNode;
}) {
  return (
    <BottomModal
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      onBackdropPress={onPressBackdrop}
    >
      {children}
    </BottomModal>
  );
}
