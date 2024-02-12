import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL =
  "https://cat-factd.herokuapp.com/facts/random?animal_type=cat&amount=1";

// 11. bikin fungsi createAsyncThunk untuk dapetin data, parameter pertama itu nama type-nya, parameter kedua itu function buat hit api-nya dengan async
export const fetchRandomFact = createAsyncThunk(
  "fetchRandom",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(API_URL);
      const responseJson = await response.json();
      return responseJson.text;
    } catch {
      return rejectWithValue("GAGAL MANING");
    }
  },
);

// 4. bikin initialstate buat slice yang dibutuhin
const initialState = {
  random: "",
};

// 5. bikin slice, ada name, initialState, reducers yang dibutuhkan
const catSlice = createSlice({
  name: "cat",
  initialState,
  reducers: {
    addFact: (state) => {
      state.random = "tidak suka tidur pagi";
    },
  },
  extraReducers: (builder) => {
    // 12. tambahin case kalo berhasil fetch, jangan lupa update state dengan paylaod dari action
    builder.addCase(fetchRandomFact.fulfilled, (state, action) => {
      state.random = action.payload;
    });

    builder.addCase(fetchRandomFact.rejected, (state, action) => {
      state.random = action.payload;
    });
  },
});

// 6. export actions biar bisa dipake di component
export const { addFact } = catSlice.actions;

// 7 export reducer biar gabung sama reducer lain
export default catSlice.reducer;
