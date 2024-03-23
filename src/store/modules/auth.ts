import { Client } from "@/utils/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ id, password }: { id: string; password: string }) => {
    try {
      await Client.get("/auth/login", {
        params: {
          username: id,
          password,
        },
      });
    } catch (error) {
      console.log(error);
    }
    return {
      id,
      password,
    };
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    nickname: "",
    isLoggedIn: false,
    signUpForm: {
      id: "",
      password: "",
      nickname: "",
      passwordCheck: "",
    },
  },
  reducers: {
    addToken: (
      state,
      action: {
        payload: string;
      }
    ) => {
      if (action.payload) {
        state.isLoggedIn = true;
        state.token = action.payload;
      }
    },
    onChangeSignUpForm: (
      state,
      action: {
        payload: {
          key: string;
          value: string;
        };
      }
    ) => {
      state.signUpForm[action.payload.key] = action.payload.value;
    },
    resetSignUpForm: (state) => {
      state.signUpForm = {
        id: "",
        password: "",
        nickname: "",
        passwordCheck: "",
      };
    },
    setUserInfo: (state, action) => {
      state.nickname = action.payload;
    },
    logout: (state) => {},
  },
});

export const {
  onChangeSignUpForm,
  setUserInfo,
  logout,
  addToken,
  resetSignUpForm,
} = authSlice.actions;

export default authSlice.reducer;
