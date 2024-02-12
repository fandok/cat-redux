import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  // 1. tambahin provider dan store-nya ke file ini buat bisa dipakai di semua component-nya
  <Provider store={store}>
    <App />
  </Provider>,
);
