import { spacing } from "@/constants/spacing";
import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  padding: 0 ${spacing.gutter}px 100px;
  flex: 1;
  justify-content: space-between;
`;

const TestContainer = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default TestContainer;
