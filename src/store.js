import { configureStore } from "@reduxjs/toolkit";

import reducer from "./redux";

// 2. bikin store-nya yang berisi reducer yang mau diimplementasi
const store = configureStore({
  reducer,
});

export default store;
