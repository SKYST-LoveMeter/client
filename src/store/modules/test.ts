import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
      lovers: number[];
    }[];
  };
  fourthScreenIndex: number;
  meta: {
    isResultLoading: boolean;
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
        description: "11111",
        value: 3,
        lovers: [],
      },
      {
        description: "2222",
        value: 1,
        lovers: [],
      },
      {
        description: "3333",
        value: 2,
        lovers: [],
      },
    ],
  },
  fourthScreenIndex: 0,
  meta: {
    isResultLoading: false,
  },
};

export const sendTestResultThunk = createAsyncThunk(
  "test/sendTestResult",
  async (data: any, { dispatch }) => {
    // const response = await api.post("/test", data);
    // const result = response.data;
    // dispatch(renderResult(result));

    return data;
  }
);

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
    addEffort: (state, action) => {
      state.result.effort.push(action.payload);
    },
    increaseFourthScreenIndex: (state) => {
      state.fourthScreenIndex += 1;
    },
    decreaseFourthScreenIndex: (state) => {
      state.fourthScreenIndex -= 1;
    },
    ToggleLoversToCurrentEffort: (
      state,
      action: {
        payload: {
          loverId: number;
        };
      }
    ) => {
      const { loverId } = action.payload;
      const currentEffort = state.result.effort[state.fourthScreenIndex];

      const currentLovers = currentEffort.lovers;

      if (currentLovers.includes(loverId)) {
        currentEffort.lovers = currentLovers.filter(
          (lover) => lover !== loverId
        );
      } else {
        currentEffort.lovers.push(loverId);
      }
    },
  },
});

export const {
  renderCategory,
  addEffort,
  increaseFourthScreenIndex,
  decreaseFourthScreenIndex,
  ToggleLoversToCurrentEffort,
  setLove,
  setLovePercentage,
} = testSlice.actions;

export default testSlice.reducer;
