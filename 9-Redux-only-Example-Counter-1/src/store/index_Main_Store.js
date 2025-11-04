import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./counter";   //from counter.js
import privacySlice from "./privacy_redux"

const mainStore = configureStore({
   reducer: {
      counter: counterSlice.reducer,
      privacy: privacySlice.reducer,
   },
});

export default mainStore;