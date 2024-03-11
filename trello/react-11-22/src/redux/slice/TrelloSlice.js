import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../config/client";

export const getApiTask = createAsyncThunk("getApiTask", async () => {
  const apiKey = localStorage.getItem("apiKey");
  const { data } = await client.get(`/tasks`, null, apiKey);
  return data.data;
});

export const TrelloSlice = createSlice({
  name: "trello",

  initialState: {
    tasks: [],
    loading: false,
  },

  reducers: {
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    updateTask: (state, action) => {
      state.tasks = action.payload;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task._id !== action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getApiTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(getApiTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload.tasks;
      })
      .addCase(getApiTask.rejected, (state) => {
        state.loading = false;
      });
  },
});
