import { createSlice } from "@reduxjs/toolkit"
import { getUser, getUsers } from "./asyncActions"
import { User } from "./types"

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {} as User,
    isLoading: true,
    error: {} as any,
    newUser: {} as User,
    isEmpty: false,
  },
  reducers: {
    onSubmit: (state, action) => {
      state.newUser = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.user = action.payload
        state.isLoading = false
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.error = "Something that wrong"
      })
      .addCase(getUser.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.isEmpty = true
        state.isLoading = false
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isEmpty = false
        state.error = "Something that wrong"
      })
  },
})

export const { onSubmit } = userSlice.actions
export default userSlice.reducer
