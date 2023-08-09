import { createAsyncThunk } from "@reduxjs/toolkit"
import { User } from "./types"
import { RootState } from "../../app/store"
import axios from "axios"

const base_url = "http://localhost:3000"

export const getUsers = createAsyncThunk(
  "user/addNewUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${base_url}/users`, {
        params: { _page: 1, _limit: 10 },
      })
      const total = response.headers["x-total-count"]
      console.log(total, "total")
      return response.data
    } catch (error) {
      console.log(error, "error")
      return rejectWithValue(error)
    }
  },
)

export const getUser = createAsyncThunk<any, string>(
  "user/addNewUse",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${base_url}/users/${id}`, {
        params: { _page: 1, _limit: 10 },
      })
      return response.data
    } catch (error) {
      console.log(error, "error")
      return rejectWithValue(error)
    }
  },
)

export const onSubmitNewUser = createAsyncThunk<any, User>(
  "user/onSubmitNewUser",
  async (user, { rejectWithValue }) => {
    try {
      await axios.post(`${base_url}/users`, user)
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const onUpdateUser = createAsyncThunk<any, User>(
  "user/onUpdateUser",
  async (user, { rejectWithValue }) => {
    try {
      await axios.put(`${base_url}/users`, {
        id: user.id,
        name: user.name,
        email: user.email,
        avatarUrl: user,
        aboutMe: user.aboutMe,
      })
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)
