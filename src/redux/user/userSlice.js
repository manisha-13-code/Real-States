import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    };
const userSlice = createSlice({
      name: 'user',
        initialState,
        reducers: {
            signInStart: (state) => {
                state.loading = true;
            },
            signInSuccess: (state, action) => {
                state.currentUser = action.payload;
                state.isAuthenticated = true;
                state.loading = false;
                state.error = null;
            },
            signInFailure: (state, action) => {
                state.loading = false;
                state.error = action.payload;
            },
        }
    });

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;
export default userSlice.reducer;