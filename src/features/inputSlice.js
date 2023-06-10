import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    inputValue: ''
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setInputValue: (state, action) => {
        state.inputvalue = action.payload.inputvalue
    }
  }
})


export const { setInputValue } = inputSlice.actions
export const selectInputValue = state => state.input.inputvalue

export default inputSlice.reducer