import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPicture = createAsyncThunk(
  "dogs/getPicture",
  async (params, {}) => {
    const param = params;
    let imageUrl = "";
    if (param === "random") {
      imageUrl = await axios
        .get(`https://dog.ceo/api/breeds/image/random`)
        .then((resp) => resp.data)
        .then((data) => data.message);
    } else {
      imageUrl = await axios
        .get(`https://dog.ceo/api/breed/${param}/images/random`)
        .then((resp) => resp.data)
        .then((data) => data.message);
    }

    return imageUrl;
  }
);
//
export const getBreedData = createAsyncThunk(
  "dogs/getBreedData",
  async (_, { dispatch }) => {
    const data = await axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((resp) => resp.data)
      .then((data) => data.message);
    const listOfKeys = Object.keys(data);
    dispatch(setBreedsData(listOfKeys));
  }
);

const initialState = {
  data: "",
  breedData: [],
  toggleShowBreeds: false,
  loading: false,
  error: false,
};

export const dogsSlice = createSlice({
  name: "dogs",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setBreedsData: (state, action) => {
      state.breedData = action.payload;
    },
    setToggleShowBreeds: (state) => {
      state.toggleShowBreeds = !state.toggleShowBreeds;
    },
  },
  extraReducers: {
    [getPicture.pending]: (state) => {
      state.error = false;
      state.loading = true;
    },
    [getPicture.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getPicture.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      state.data = "";
    },
  },
});

export const { setData, setBreedsData, setToggleShowBreeds } =
  dogsSlice.actions;

export default dogsSlice.reducer;
