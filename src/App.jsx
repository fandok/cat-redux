import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchRandomFact } from "./redux/catSlice";

const App = () => {
  const dispatch = useDispatch();
  // 9. panggil state yang dibutuhkan dari redux
  const random = useSelector((state) => state.cat.random);

  // 13. panggil action untuk fetch data-nya
  useEffect(() => {
    dispatch(fetchRandomFact());
  }, [dispatch]);

  // 10. implementasi data
  return <h1>{random ? random : "loading....."}</h1>;
};

export default App;
