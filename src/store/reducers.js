import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const baseURL = 'https://api.github.com/users'

const initialState = {
  loading: false,
  search: '',
  error: '',
  project: {},
  projects: []
}

export const searchProfile = createAsyncThunk(
  'searchProfile',
  async (search) => {
    try {
      const { data } = await axios.get(`${baseURL}/${search}/repos`)
      return data
    } catch (e) {
      const { status } = e.response || 500
      if (status === 404) return 'Username not found'
      else return e.message
    }
  }
)

export const projectsSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setSearch: (state, { payload }) => {
      state.search = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProfile.pending, (state) => {
        console.log({ state })
      })
      .addCase(searchProfile.rejected, (state, action) => {
        console.log({ action })
      })
      .addCase(searchProfile.fulfilled, (state, action) => {
        console.log({ action })
      })
  }
})
export const { setSearch } = projectsSlice.actions
export const projectsReducer = projectsSlice.reducer
