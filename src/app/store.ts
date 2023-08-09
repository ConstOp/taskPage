import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import userSlice from "../features/user/userSlice"

const preloadedState = JSON.parse(localStorage.getItem("state") ?? "{}")

export const store = configureStore({
  preloadedState,
  reducer: {
    counter: counterReducer,
    user: userSlice,
  },
})

store.subscribe(() =>
  localStorage.setItem("state", JSON.stringify(store.getState())),
)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
