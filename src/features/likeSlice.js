import { createSlice } from '@reduxjs/toolkit'

export const likeSlice = createSlice({
  name: 'like',
  initialState: [],
  reducers: {
    like: (state, action) => {
      return [...state, action.payload];
    },
    dislike: (state, action) => {
      return state.filter(({ id }) => id !== action.payload.id);
    }
  }
})

// Action creators are generated for each case reducer function
export const { like, dislike  } = likeSlice.actions

export const likeReducer = state => state.like

export default likeSlice.reducer