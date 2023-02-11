import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
          name: 'auth',
          initialState: { token: null },
          reducers: {
                    logIn(state, { payload }) {
                              state.token = payload
                    },
                    logOut(state) {
                              state.token = null
                    }
          },
})

export const { logIn, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state: any) => state.auth.user
export const selectCurrentToken = (state: any) => state.auth.token