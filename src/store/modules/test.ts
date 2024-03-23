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
  currentTestId: number | null;
}

const initialState: IInitialState = {
  currentTestId: null,
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
    startTest: (
      state,
      action: {
        payload: {
          testId: number;
          category: {
            [key: number]: string;
          };
        };
      }
    ) => {
      state.currentTestId = action.payload.testId;
      state.category = action.payload.category;
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
    addEffort: (
      state,
      action: {
        payload: {
          description: string;
          value: number;
          lovers: number[];
        };
      }
    ) => {
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
  startTest,
} = testSlice.actions;

export default testSlice.reducer;
