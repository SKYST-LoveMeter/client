import React from "react";
import Typography from "../@common/Typography";

const TestQuestionText = ({ text }: { text: string }) => {
  return (
    <Typography size="lg" styles={{ textAlign: "center" }}>
      {text}
    </Typography>
  );
};

export default TestQuestionText;
