import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../redux/slice/counterSlice'
import { userSlice } from '../redux/slice/userSlice'

 const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    firstName: counterSlice.reducer,
    user:userSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
export default store;