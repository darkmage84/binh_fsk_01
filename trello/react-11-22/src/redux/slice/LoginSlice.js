import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../config/client";

export const getApiEmail = createAsyncThunk("getApiEmail", async (email) => {
  const { data } = await client.get(`/api-key?email=${email}`);
  const apiKey = data.data.apiKey;
  localStorage.setItem("apiKey", apiKey);
  return data;
});

export const LoginSlice = createSlice({
  name: "login",

  initialState: {
    loading: false,
    errorMess: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getApiEmail.pending, (state) => {
        state.loading = true;
      })
      .addCase(getApiEmail.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getApiEmail.rejected, (state, action) => {
        state.loading = false;
        state.errorMess = action.error.message;
      });
  },
});
