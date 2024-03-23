import { View, Text } from "react-native";
import React from "react";
import BottomModal from "./@common/BottomModal";

export default function AddEffortModal({
  isVisible,
  setIsVisible,
  children,
}: {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) {
  return (
    <BottomModal
      isModalVisible={isVisible}
      setIsModalVisible={setIsVisible}
      headerText="사진 선택"
    >
      {children}
    </BottomModal>
  );
}
