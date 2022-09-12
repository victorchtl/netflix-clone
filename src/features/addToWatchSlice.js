import { createSlice } from '@reduxjs/toolkit'

export const addToWatchSlice = createSlice({
  name: 'addToWatch',
  initialState: [],
  reducers: {
    add: (state, action) => {
      return [...state, action.payload];
    },
    remove: (state, action) => {
      return state.filter(({ id }) => id !== action.payload.id);
    }
  }
})

// Action creators are generated for each case reducer function
export const { add, remove  } = addToWatchSlice.actions

export const addToWatchReducer = state => state.addToWatch

export default addToWatchSlice.reducer