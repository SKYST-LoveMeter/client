import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [
    {
      id: 1,
      name: "나",
    },
    {
      id: 2,
      name: "가족",
    },
    {
      id: 3,
      name: "애완동물",
    },
    {
      id: 4,
      name: "선생님",
    },
    {
      id: 5,
      name: "환경",
    },
  ],
  result: {
    love: [
      {
        id: 2,
        percentage: 40,
      },
      {
        id: 3,
        percentage: 30,
      },
    ],
    effort: [
      {
        description: "프로젝트1",
        lovers: ["할머니", "나"],
      },
    ],
  },
};

export const testSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    renderCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { renderCategory } = testSlice.actions;

export default testSlice.reducer;
