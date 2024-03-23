import { View, Text, TextInput } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Box = styled.View`
  border-width: 1px;
  border-color: ${(props) => props.theme.palette.gray};
  padding: 14px 20px;
  border-radius: 999px;
`;

export default function AuthForm({
  text,
  placeholder,
  onChange,
}: {
  text: string;
  placeholder: string;
  onChange: (text: string) => void;
}) {
  return (
    <Box>
      <TextInput
        placeholder={placeholder}
        value={text}
        onChangeText={onChange}
        autoCorrect={false}
        autoCapitalize="none"
      ></TextInput>
    </Box>
  );
}
