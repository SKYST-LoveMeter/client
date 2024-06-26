import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./modules/auth";
import testReducer from "./modules/test";
import calendarReducer from "./modules/calendar";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    test: testReducer,
    calendar: calendarReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type TRootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type TAppDispatch = typeof store.dispatch;
