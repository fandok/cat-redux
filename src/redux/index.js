import { combineReducers } from "redux";

import catSlice from "./catSlice";

// 3 bikin reducer-nya berdasarkan kebutuhan
const reducer = combineReducers({
  // 8. tambahin reducer yang dibuat dari slice
  cat: catSlice,
});

export default reducer;
