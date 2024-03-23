import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  category: {
    [key: number]: string;
  };
  result: {
    love: {
      id: number;
      percentage: number;
    }[];
    effort: {
      description: string;
      value: number;
    }[];
  };
}

const initialState: IInitialState = {
  category: {
    1: "나",
    2: "가족",
    3: "애완동물",
    4: "선생님",
    5: "환경",
  },
  result: {
    love: [],
    effort: [],
  },
};

export const testSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    renderCategory: (state, action) => {
      state.category = action.payload;
    },
    setLove: (state, action) => {
      state.result.love = action.payload;
    },
    setLovePercentage: (
      state,
      action: {
        payload: {
          id: number;
          percentage: number;
        };
      }
    ) => {
      state.result.love.find(
        (item) => item.id === action.payload.id
      )!.percentage = action.payload.percentage;
    },
  },
});

export const { renderCategory, setLove, setLovePercentage } = testSlice.actions;

export default testSlice.reducer;
