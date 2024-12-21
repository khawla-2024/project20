import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const registerRestaurant = createAsyncThunk(
  "users/registerRestaurant",
  async (userData) => { 
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/registerRestaurant`, {
        nameres: userData.name,
        date: userData.date,
        day: userData.day,
        numperson: userData.numperson,
      })
      const user = response.data.user;
      const msg = response.data.msg;
      console.log(msg);
      return {user,msg}

    }
    catch (error) { 
      const msg = error.message;
      return { msg }
    }

  } 
)

const initialState = {
  user:null,
  msg: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  isLogin:false,
}
export const resSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // Action to add a new restaurant
    addRes: (state, action) => {
      state.restaurants.push(action.payload); // Add new restaurant to the list
    },
    // Action to update an existing restaurant
    updateRes: (state, action) => {
      const { nameres } = action.payload; // Assuming 'nameres' is unique identifier
      const index = state.restaurants.findIndex((restaurant) => restaurant.nameres === nameres);
      if (index !== -1) {
        state.restaurants[index] = action.payload; // Update the restaurant
      }
    },
    // Action to delete a restaurant by its name (or another unique identifier)
    deleteRes: (state, action) => {
      state.restaurants = state.restaurants.filter((restaurant) => restaurant.nameres !== action.payload);
    },
  },
  extraReducers: 
    (builder) => {
      builder
        .addCase(registerRestaurant.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(registerRestaurant.fulfilled, (state, action) => {
          state.isSuccess = true;
          state.user = action.payload.user;
          state.msg = action.payload.msg;

        })
        .addCase(registerRestaurant.rejected, (state) => {
          state.isError = true;
          state.msg = "Unexpected error is occured";
        });
}}) 
export default resSlice.reducer;
export const { addRes, updateRes, deleteRes } = resSlice.actions;
