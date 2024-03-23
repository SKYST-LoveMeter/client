import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

interface CalendarState {
  isRead: boolean;
  currentTestId: number | null;
}

const initialState: CalendarState = {
  isRead: false,
  currentTestId: null,
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    enterReadMode: (
      state,
      action: {
        payload: { testId: number };
      }
    ) => {
      state.isRead = true;
      state.currentTestId = action.payload.testId;
    },
    exitReadMode: (state) => {
      state.isRead = false;
      state.currentTestId = null;
    },
  },
});

export const { enterReadMode, exitReadMode } = calendarSlice.actions;

export default calendarSlice.reducer;
