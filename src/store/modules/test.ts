import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: {
    1: "나",
    2: "가족",
    3: "애완동물",
    4: "선생님",
    5: "환경",
  },
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
      // {
      //   description: "프로젝트1",
      //   value: 3,
      // },
      // {
      //   description: "프로젝트2",
      //   value: 1,
      // },
    ],
  },
  fourthScreenIndex: 0,
};

export const testSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    renderCategory: (state, action) => {
      state.category = action.payload;
    },
    addEffort: (state, action) => {
      state.result.effort.push(action.payload);
    },
  },
});

export const { renderCategory, addEffort } = testSlice.actions;

export default testSlice.reducer;
