import { createSlice } from '@reduxjs/toolkit'

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    collapsed: false
  },
  reducers: {
    toggleCollapsed: (state, action) => {
      console.log('action.payload:', action.payload)
      state.collapsed = !!action.payload
    }
  }
})

export const {
  toggleCollapsed
} = menuSlice.actions

export default menuSlice.reducer