import { configureStore } from "@reduxjs/toolkit";
import { LoginSlice } from "./slice/LoginSlice";
import { TrelloSlice } from "./slice/TrelloSlice";

const rootReducer = {
  reducer: {
    login: LoginSlice.reducer,
    trello: TrelloSlice.reducer,
  },
};

export const store = configureStore(rootReducer);

console.log(store);
