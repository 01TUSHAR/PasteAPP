// Step1 : Store created
import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './features/pasteSlice'

export const store = configureStore({
  reducer: {
    // Slice Reducer added to the store
    pasteData: pasteReducer,
  },
})